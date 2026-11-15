import json,re,sys
BASE='/tmp/claude-0/-home-user-branch-boost-builder/36a6d023-1820-5438-b7a7-9149dcf56310/scratchpad/'
DATA=BASE+'data'
urls=json.load(open(BASE+'fc2/urls.json'))
pages={}
for l in open(DATA+'/pages.jsonl'):
    d=json.loads(l); pages[d['url']]=d

def sents(t):
    return re.split(r'(?<=[\.\?])\s+(?=[A-Z0-9])',t)

def ctx(t,pat,w=160,maxn=30):
    out=[]
    for m in re.finditer(pat,t):
        s=max(0,m.start()-w); e=min(len(t),m.end()+w)
        out.append(t[s:e].replace('\n',' '))
        if len(out)>=maxn: break
    return out

recs={}
for u in urls:
    p=pages[u]
    t=open(DATA+'/'+p['text_file']).read()
    r={'url':u,'h1':p['h1'],'title':p['title'],'meta':p['meta_description']}
    af=p.get('above_fold_text') or ''
    m=re.match(r'^(.*?),\s*Michigan',af); r['eyebrow']=m.group(1) if m else af[:40]
    h1=p['h1'][0] if isinstance(p['h1'],list) and p['h1'] else (p['h1'] or ''); r['h1']=h1; m=re.search(r'Mortgage Broker in (.+?), (?:MI|Michigan)',h1); r['city']=m.group(1) if m else h1
    # glance block
    m=re.search(r' at a glance (.{0,400}?)(?: What | How | Why | Where | Which | Is | Can | Do )',t)
    r['glance']=m.group(1) if m else ''
    m=re.search(r'By the numbers (.{0,900}?)(?:What does financing|Financing |What is the .{0,40}housing market)',t)
    r['numbers']=m.group(1) if m else ''
    r['zips']=sorted(set(re.findall(r'\b(4[89]\d{3})\b',t)))
    r['pop']=ctx(t,r'(?:population|residents|people)\b',120,12)
    r['inctax']=ctx(t,r'income tax',200,10)
    r['mills']=ctx(t,r'\d{1,3}\.\d{1,4} mills',150,40)
    r['pctzip']=ctx(t,r'\d{1,3}(?:\.\d)?% of (?:the )?(?:ZIP|\d{5}|its ZIP|the ZIP)',150,20)
    r['type']=ctx(t,r'\b(?:charter township|general law township|census-designated|CDP|home rule city|is a village|is a city|a village of|a city of)\b',120,10)
    r['uncap']=ctx(t,r'Uncapping Study',150,5)
    r['fha']=ctx(t,r'FHA limit|conforming limit',120,6)
    r['mi10k']=ctx(t,r'MI 10K',150,4)
    r['schools']=sorted(set(re.findall(r'((?:[A-Z][A-Za-z\.\'-]+ ){1,5}(?:Public Schools|Community Schools|Community School District|School District|Schools|Area Schools|Consolidated Schools|Unified School District))',t)))
    r['statute']=ctx(t,r'MCL|Proposal A|transfer tax|Public Act|P\.A\.',150,8)
    r['sqmi']=ctx(t,r'square mile',100,5)
    r['faq_price']=ctx(t,r'homes selling for in 20\d\d\?',600,1)
    r['faq_tax']=ctx(t,r'What is the property tax on an? ',600,1)
    r['sources_line']=ctx(t,r'sources behind the',100,1)
    r['len']=len(t.split())
    recs[u]=r
json.dump(recs,open(BASE+'fc2/claims.json','w'),indent=1)
print(len(recs))
