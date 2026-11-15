import re,json
B='/tmp/claude-0/-home-user-branch-boost-builder/36a6d023-1820-5438-b7a7-9149dcf56310/scratchpad/'
rows=json.load(open(B+'fc2/rates_all.json'))
r=json.load(open(B+'fc2/claims.json'))
pages={}
for l in open(B+'data/pages.jsonl'):
    d=json.loads(l); pages[d['url']]=d
idx={}
for row in rows:
    for f in ('h','nh','h_sa','nh_sa'):
        v=row.get(f)
        if v is None: continue
        for nd in (1,2,3,4):
            idx.setdefault((nd,round(v,nd)),[]).append((row['county'],row['year'],row['unit'],row['school'][:28],f))
out={}
for u,d in r.items():
    t=open(B+'data/'+pages[u]['text_file']).read()
    # cut off sources section
    cut=t.find(' Sources Where do the')
    body=t if cut<0 else t[:cut]
    found=[]
    for m in re.finditer(r'(?<![\d\.$])(\d{2,3}\.(\d{1,4}))(?![\d%])',body):
        val=float(m.group(1)); nd=len(m.group(2))
        if not (12<=val<=125): continue
        c=body[max(0,m.start()-140):m.end()+60]
        if not re.search(r'mill|homestead|non-homestead|principal residence|rate',c,re.I): continue
        if re.search(r'square miles|acres|minutes|\$'+re.escape(m.group(1)),c): continue
        hits=idx.get((nd,round(val,nd)),[])
        # also tolerate rounding variants (e.g. page rounds 64.1844 -> 64.18)
        found.append({'val':m.group(1),'hits':hits[:6],'ctx':c.replace('\n',' ')})
    out[u]=found
json.dump(out,open(B+'fc2/millmatch.json','w'),indent=1)
tot=sum(len(v) for v in out.values()); hit=sum(1 for v in out.values() for f in v if f['hits'])
print('mill numbers',tot,'matched',hit)
# per page summary
for u,v in out.items():
    um=[f for f in v if not f['hits']]
    yrs=set(h[1] for f in v for h in f['hits'])
    print(f"{r[u]['city'][:22]:22} n={len(v):3} matched={len(v)-len(um):3} years={sorted(yrs)} unmatched={[f['val'] for f in um][:12]}")
