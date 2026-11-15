import re,json,collections
B='/tmp/claude-0/-home-user-branch-boost-builder/36a6d023-1820-5438-b7a7-9149dcf56310/scratchpad/'
r=json.load(open(B+'fc2/claims.json'))
pages={}
for l in open(B+'data/pages.jsonl'):
    d=json.loads(l); pages[d['url']]=d
res={}
for u,d in r.items():
    t=open(B+'data/'+pages[u]['text_file']).read()
    cut=t.find(' Sources Where do the'); t=t if cut<0 else t[:cut]
    zp=collections.defaultdict(list)
    for m in re.finditer(r'ZIP (4[89]\d{3})\s*,?\s*(?:[^$]{0,40}?)near \$([\d,]+)',t):
        zp[m.group(1)].append(('card',int(m.group(2).replace(',','')),t[max(0,m.start()-20):m.end()+10]))
    for m in re.finditer(r'(?:about|near|roughly) \$([\d,]{6,9})[^\.\$]{0,40}?\((4[89]\d{3})\)',t):
        zp[m.group(2)].append(('paren',int(m.group(1).replace(',','')),t[max(0,m.start()-30):m.end()+5]))
    for m in re.finditer(r'(?:about|near|roughly) \$([\d,]{6,9}) in (4[89]\d{3})',t):
        zp[m.group(2)].append(('in',int(m.group(1).replace(',','')),t[max(0,m.start()-30):m.end()+5]))
    for m in re.finditer(r'Redfin\'?s median sale (?:was|for [^\.]{0,40}?was) about \$([\d,]+)',t):
        pass
    issues=[]
    for z,v in zp.items():
        vals=sorted(set(x[1] for x in v))
        if len(vals)>1 and (max(vals)-min(vals))/min(vals)>0.05:
            issues.append((z,vals,[x[2] for x in v][:3]))
    res[u]=issues
    if issues:
        print('##',d['city'])
        for z,vals,c in issues: print('   ',z,vals,'|',' || '.join(c)[:300])
