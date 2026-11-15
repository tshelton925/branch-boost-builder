import sys,json,re
sys.path.insert(0,'/tmp/claude-0/-home-user-branch-boost-builder/36a6d023-1820-5438-b7a7-9149dcf56310/scratchpad/fc2/scripts')
from geo import *
r,geo,pe,acs,gpid,gcid=load()
Z=json.load(open(BASE+'fc2/zcta_rel.json'))
ent_zips={}
for z,d in Z.items():
    for p in d['parts']:
        ent_zips.setdefault((p['kind'],p['geoid']),[]).append((z,p['pct_of_entity'],p['pct_of_zip']))
res={}
for u,d in r.items():
    if 'mortgage-michigan' in u: continue
    g=geo[u]
    key=('place',g['place']['GEOID']) if g['place'] else ('cousub',g['cousub']['GEOID'])
    ez=sorted(ent_zips.get(key,[]),key=lambda x:-x[1])
    gl=d['glance']
    m=re.search(r'ZIP codes? (.*)$',gl)
    listed=re.findall(r'\b(4[89]\d{3})\b',m.group(1)) if m else []
    more=re.search(r'and (\d+) more',gl)
    nb=re.search(r'(\d+) Residential ZIP codes?',d['numbers'])
    issues=[]
    for z in listed:
        hit=[x for x in ez if x[0]==z]
        if not hit: issues.append(f'{z} listed but no land in entity' + ('' if z in Z else ' (not a ZCTA / PO box?)'))
        elif hit[0][1]<0.5: issues.append(f'{z} listed but only {hit[0][1]}% of entity land')
    if not more:
        for z,pe_,pz in ez:
            if pe_>=5 and z not in listed: issues.append(f'{z} holds {pe_}% of entity land but not listed')
    if nb and not more and int(nb.group(1))!=len(listed): issues.append(f'numbers block says {nb.group(1)} ZIPs vs {len(listed)} listed in glance')
    res[u]={'city':d['city'],'listed':listed,'entity_zips':[(z,a,b) for z,a,b in ez if a>=0.5],'issues':issues}
json.dump(res,open(BASE+'fc2/zip_glance_check.json','w'),indent=1)
for u,v in res.items():
    if v['issues']: print(v['city'],'| listed',v['listed'],'| entity',[(z,a) for z,a,b in v['entity_zips']],'\n    ',v['issues'])
