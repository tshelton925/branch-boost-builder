import json,collections,re
B='/tmp/claude-0/-home-user-branch-boost-builder/36a6d023-1820-5438-b7a7-9149dcf56310/scratchpad/'
rows=json.load(open(B+'fc2/rows.json'))
r=json.load(open(B+'fc2/claims.json'))
mm=json.load(open(B+'fc2/millmatch.json')); am=json.load(open(B+'fc2/acsmatch.json'))
W={('incorrect','P0'):15,('incorrect','P1'):8,('incorrect','P2'):4,('outdated','P0'):12,('outdated','P1'):4,('outdated','P2'):2,('unverifiable','P1'):4,('unverifiable','P2'):1.5}
ZERO={'ZIP land share'}
per=collections.defaultdict(list)
for x in rows: per[x['url']].append(x)
out=[]
for u in r:
    rs=per.get(u,[])
    c=collections.Counter(x['status'] for x in rs)
    ded=0; unv=0; issues=[]
    for x in rs:
        if x['status']=='correct': continue
        w=W.get((x['status'],x['priority']),0)
        if x['claim_type'] in ZERO: w=0
        if x['status']=='unverifiable':
            unv+=w
        else:
            ded+=w
        if w>=2: issues.append((w,x['claim_type'],x['status'],x['priority']))
    ded+=min(unv,12)
    score=max(0,round(100-ded))
    grade='A' if score>=90 else 'B' if score>=80 else 'C' if score>=70 else 'D' if score>=60 else 'F'
    issues.sort(key=lambda z:-z[0])
    nfig=len(mm.get(u,[]))+len(am.get(u,[]))
    out.append({'url':u,'city':r[u]['city'],'county':r[u]['eyebrow'],'rows':len(rs),'correct':c['correct'],'incorrect':c['incorrect'],'outdated':c['outdated'],'unverifiable':c['unverifiable'],'figures':nfig,'score':score,'grade':grade,'top':'; '.join(f"{t} ({s} {p})" for w,t,s,p in issues[:3])})
json.dump(out,open(B+'fc2/scores.json','w'),indent=1)
import statistics
sc=[o['score'] for o in out]
print('mean',round(statistics.mean(sc),1),'median',statistics.median(sc))
print(collections.Counter(o['grade'] for o in out))
for o in sorted(out,key=lambda o:o['score'])[:20]: print(o['score'],o['grade'],o['city'],'|',o['top'])
