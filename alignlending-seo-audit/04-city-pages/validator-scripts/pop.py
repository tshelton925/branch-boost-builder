import sys,re,json
sys.path.insert(0,'/tmp/claude-0/-home-user-branch-boost-builder/36a6d023-1820-5438-b7a7-9149dcf56310/scratchpad/fc2/scripts')
from geo import *
r,geo,pe,acs,gpid,gcid=load()
PL=json.load(open(BASE+'fc2/pl2020_mi.json'))
pages={}
for l in open(BASE+'data/pages.jsonl'):
    d=json.loads(l); pages[d['url']]=d
def official(u):
    g=geo[u]; out={}
    if g['place']:
        pid=g['place']['GEOID'][2:]
        row=pe.get('P'+pid)
        a=acs.get('1600000US26'+pid,{})
    else:
        cid=g['cousub']['GEOID'][2:]
        row=pe.get('C'+cid)
        a=acs.get('0600000US26'+cid,{})
    if row:
        out['2020 base']=int(row['ESTIMATESBASE2020']); out['V2024']=int(row['POPESTIMATE2024']); out['V2025']=int(row['POPESTIMATE2025'])
    if a.get('B01003_E001'): out['ACS 2020-24']=int(a['B01003_E001'])
    gid=('1600000US'+g['place']['GEOID']) if g['place'] else ('0600000US'+g['cousub']['GEOID'])
    if gid in PL: out['2020 Census']=PL[gid]['pop']
    if row: out['Jul2020 est']=int(row['POPESTIMATE2020']); out['V2023']=int(row['POPESTIMATE2023'])
    return out
res={}
for u,d in r.items():
    if 'mortgage-michigan' in u: continue
    t=open(BASE+'data/'+pages[u]['text_file']).read()
    off=official(u)
    claims=[]
    for m in re.finditer(r'(\d{1,3}(?:,\d{3})+|\d{3,})\s+(?:residents|people)\b',t):
        n=int(m.group(1).replace(',',''))
        c=t[max(0,m.start()-160):m.end()+40].replace('\n',' ')
        if re.search(r'tract |block group|block |jobs|employ|working|workers|students|enroll|attend|serves|holds 100',c[-75:],re.I): continue
        claims.append((n,c))
    for m in re.finditer(r'(?:about|roughly|nearly|near|some)\s+(\d+(?:\.\d+)?)\s*(thousand|million)?\s+(?:residents|people)',t):
        pass
    best=[]
    for n,c in claims:
        diffs={k:abs(n-v)/v for k,v in off.items()}
        k=min(diffs,key=diffs.get) if diffs else None
        best.append({'n':n,'ctx':c,'closest':k,'val':off.get(k),'pct':round(diffs[k]*100,2) if k else None})
    res[u]={'city':d['city'],'official':off,'claims':best}
json.dump(res,open(BASE+'fc2/pop_check.json','w'),indent=1)
for u,v in res.items():
    flagged=[c for c in v['claims'] if c['pct'] is None or c['pct']>2]
    ok=[c for c in v['claims'] if c['pct'] is not None and c['pct']<=2]
    print('##',v['city'],v['official'],'ok:',[(c['n'],c['closest']) for c in ok])
    for c in flagged: print('   FLAG',c['n'],c['closest'],c['val'],c['pct'],'|',c['ctx'][-200:])
