import json,re
BASE='/tmp/claude-0/-home-user-branch-boost-builder/36a6d023-1820-5438-b7a7-9149dcf56310/scratchpad/'
r=json.load(open(BASE+'fc2/claims.json'))
Z=json.load(open(BASE+'fc2/zcta_rel.json'))
pages={}
for l in open(BASE+'data/pages.jsonl'):
    d=json.loads(l); pages[d['url']]=d
WORD={'half':50,'a third':33,'about a third':33,'a quarter':25,'a fifth':20,'four fifths':80,'two thirds':67,'a tenth':10,'three quarters':75}
def short(n): return re.sub(r'^Village of ','',re.sub(r' (city|village|charter township|township|CDP|County)$','',n))
out=[]
for u,d in r.items():
    t=open(BASE+'data/'+pages[u]['text_file']).read()
    ss=re.split(r'(?<=[\.\?])\s+(?=[A-Z0-9])',t)
    seen=set()
    for s in ss:
        if s in seen: continue
        seen.add(s)
        zips=[z for z in re.findall(r'\b(4[89]\d{3})\b',s) if z in Z]
        if not zips: continue
        if re.search(r'homes|median|Redfin|sale|price|taxable|owner|detached|mills|School|district',s,re.I): continue
        if not re.search(r'land|ZIP|lies|inside|is in|are in|area',s): continue
        for m in re.finditer(r'(\d+(?:\.\d+)?)%',s):
            pct=float(m.group(1))
            # nearest entity name in sentence
            best=None
            for z in zips:
                for p in Z[z]['parts']:
                    if p['kind']=='county' or p['pct_of_zip'] is None: continue
                    nm=short(p['name'])
                    for mm in re.finditer(re.escape(nm),s):
                        dist=min(abs(mm.start()-m.start()),abs(mm.end()-m.end()))
                        if best is None or dist<best[0]: best=(dist,z,p)
            if not best:
                # default: page's own city
                city=d['city'].replace(' Township','')
                for z in zips:
                    for p in Z[z]['parts']:
                        if p['kind']!='county' and short(p['name'])==city:
                            best=(999,z,p)
            if best:
                dist,z,p=best
                ok=abs(p['pct_of_zip']-pct)<=3 or (p['pct_of_entity'] is not None and abs(p['pct_of_entity']-pct)<=3)
                out.append({'url':u,'zip':z,'entity':p['name'],'claim_pct':pct,'actual_pct_of_zip':p['pct_of_zip'],'actual_pct_of_entity':p['pct_of_entity'],'ok':ok,'sent':s[:300]})
json.dump(out,open(BASE+'fc2/zippct_check.json','w'),indent=1)
print(len(out),'checked;',sum(1 for o in out if o['ok']),'ok')
for o in out:
    if not o['ok']: print(o['url'].split('lender-')[-1],o['zip'],o['entity'],'claim',o['claim_pct'],'zip%',o['actual_pct_of_zip'],'ent%',o['actual_pct_of_entity'],'|',o['sent'][:230])
