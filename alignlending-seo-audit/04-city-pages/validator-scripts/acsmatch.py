import re,json,collections
B='/tmp/claude-0/-home-user-branch-boost-builder/36a6d023-1820-5438-b7a7-9149dcf56310/scratchpad/'
acs=json.load(open(B+'fc2/acs2024_mi.json'))
r=json.load(open(B+'fc2/claims.json'))
pages={}
for l in open(B+'data/pages.jsonl'):
    d=json.loads(l); pages[d['url']]=d
vals=collections.defaultdict(set)
for g,d in acs.items():
    for k in ('B25077_E001','B25077_M001','B19013_E001','B25064_E001','B25103_E001','B19013_M001'):
        v=d.get(k)
        if v and re.match(r'^\d+$',v): vals[int(v)].add(k[:6])
allv=sorted(vals)
import bisect
def match(n,rounded):
    if n in vals: return 'exact'
    if rounded:
        step=1000 if n%1000==0 else 100
        i=bisect.bisect_left(allv,n-step/2)
        while i<len(allv) and allv[i]<=n+step/2:
            if 'B25077' in vals[allv[i]]: return 'rounded'
            i+=1
    return None
out={}; tot=collections.Counter()
for u,d in r.items():
    t=open(B+'data/'+pages[u]['text_file']).read()
    cut=t.find(' Sources Where do the'); t=t if cut<0 else t[:cut]
    res=[]
    for m in re.finditer(r'\$(\d{1,3}(?:,\d{3})+)',t):
        n=int(m.group(1).replace(',',''))
        c=t[max(0,m.start()-160):m.end()+30]
        if not re.search(r'Census|ACS|American Community Survey|owner median|owner value|owner-reported|median value|median owner|household income|survey',c,re.I): continue
        if re.search(r'Redfin|Zillow|sale|sold|list price|listing|Realtor|Homes\.com|Movoto|Ownwell|Data USA',c[-120:],re.I): continue
        if n<10000 and not re.search(r'rent|income',c[-80:],re.I): continue
        rounded = n%100==0
        mt=match(n,rounded)
        res.append({'n':n,'m':mt,'ctx':c.replace('\n',' ')})
        tot['m' if mt else 'u']+=1
    out[u]=res
json.dump(out,open(B+'fc2/acsmatch.json','w'),indent=1)
print(tot)
for u,res in out.items():
    um=[x for x in res if not x['m']]
    if um:
        print('##',r[u]['city'],f'{len(res)-len(um)}/{len(res)} matched')
        for x in um[:6]: print('    ',x['n'],'|',x['ctx'][-190:])
