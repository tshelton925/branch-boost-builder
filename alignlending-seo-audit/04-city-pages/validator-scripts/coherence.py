import json,re
BASE='/tmp/claude-0/-home-user-branch-boost-builder/36a6d023-1820-5438-b7a7-9149dcf56310/scratchpad/'
r=json.load(open(BASE+'fc2/claims.json'))
pages={}
for l in open(BASE+'data/pages.jsonl'):
    d=json.loads(l); pages[d['url']]=d
def num(s): return int(s.replace(',','').replace('$',''))
rows={}
for u,d in r.items():
    if 'mortgage-michigan' in u: continue
    t=open(BASE+'data/'+pages[u]['text_file']).read()
    gl=d['glance']; nb=d['numbers']
    g_val=re.search(r'Typical home value near \$([\d,]+)',gl)
    g_up=re.search(r'Taxable value rises about (\d+)%',gl)
    g_up_scope=re.search(r'the year after a sale \(([^)]+)\)',gl)
    g_tax=re.search(r'about ([\d\.]+)% of value',gl)
    n_val=re.search(r'\$([\d,]+) Typical home value',nb)
    n_up=re.search(r'\+(\d+)% Typical rise',nb)
    n_tax=re.search(r'([\d\.]+)% Property tax current owners pay',nb)
    # property tax section uncapping
    p_up=re.findall(r'(?:typically|typical(?:ly)?) rises? (?:about |roughly )?(\d+)%',t)
    p_up2=re.findall(r'Uncapping Study[^\.]{0,120}?(\d+)%',t)
    faq=re.search(r'homes selling for in 20\d\d\? (.{0,500})',t)
    row={'city':d['city'],'g_val':g_val and num(g_val.group(1)),'n_val':n_val and num(n_val.group(1)),'g_up':g_up and int(g_up.group(1)),'n_up':n_up and int(n_up.group(1)),
         'up_scope':g_up_scope.group(1) if g_up_scope else '','p_up':sorted(set(int(x) for x in p_up+p_up2)),'g_tax':g_tax and float(g_tax.group(1)),'n_tax':n_tax and float(n_tax.group(1)),
         'faq':faq.group(1)[:300] if faq else ''}
    iss=[]
    if row['g_val']!=row['n_val']: iss.append(f"home value glance {row['g_val']} vs numbers {row['n_val']}")
    if row['g_up']!=row['n_up']: iss.append(f"uncap glance {row['g_up']} vs numbers {row['n_up']}")
    if row['g_up'] and row['p_up'] and row['g_up'] not in row['p_up']: iss.append(f"uncap glance {row['g_up']} vs text {row['p_up']}")
    if len(row['p_up'])>1: iss.append(f"multiple uncap % in text {row['p_up']}")
    if row['g_tax']!=row['n_tax']: iss.append(f"tax% glance {row['g_tax']} vs numbers {row['n_tax']}")
    row['issues']=iss
    rows[u]=row
json.dump(rows,open(BASE+'fc2/coherence.json','w'),indent=1)
for u,row in rows.items():
    print(f"{row['city'][:22]:22} val {row['g_val']} up {row['g_up']}% {row['up_scope'][:25]:25} tax {row['g_tax']} | {'; '.join(row['issues'])}")
