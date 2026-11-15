import json,csv,re
BASE='/tmp/claude-0/-home-user-branch-boost-builder/36a6d023-1820-5438-b7a7-9149dcf56310/scratchpad/'
CTY={'Wayne County':'163','Macomb County':'099','St. Clair County':'147','Monroe County':'115','Lenawee County':'091','Oakland and Wayne counties':'163'}
def load():
    r=json.load(open(BASE+'fc2/claims.json'))
    gp={};gpid={}
    for row in csv.DictReader(open(BASE+'dl/census/2024_gaz_place_26.txt'),delimiter='\t'):
        row={k.strip():v.strip() for k,v in row.items()}
        gp.setdefault(row['NAME'].rsplit(' ',1)[0],[]).append(row); gpid[row['GEOID']]=row
    gc={};gcid={}
    for row in csv.DictReader(open(BASE+'dl/census/2024_gaz_cousubs_26.txt'),delimiter='\t'):
        row={k.strip():v.strip() for k,v in row.items()}
        gc.setdefault(row['NAME'],[]).append(row); gcid[row['GEOID']]=row
    geo={}
    for u,d in r.items():
        c=d['city']
        if 'mortgage-michigan' in u: continue
        base=c.replace(' Township','')
        g={'place':None,'cousub':None}
        if c.endswith('Township'):
            for nm in (base+' charter township',base+' township'):
                for row in gc.get(nm,[]):
                    if row['GEOID'][2:5]==CTY[d['eyebrow']]: g['cousub']=row
        else:
            for row in gp.get(c,[]): g['place']=row
            for row in gc.get(c+' city',[]):
                if row['GEOID'][2:5]==CTY[d['eyebrow']]: g['cousub']=row
        if c=='Grosse Pointe Shores':
            g['place']=gpid.get('2682453'); g['cousub']=gcid.get('2616382453')
        geo[u]=g
    # popest
    pe={}
    for row in csv.DictReader(open(BASE+'dl/census/sub-est2025_26.csv',encoding='latin-1')):
        if row['SUMLEV']=='162': pe['P'+row['PLACE']]=row
        elif row['SUMLEV']=='061': pe['C'+row['COUNTY']+row['COUSUB']]=row
        elif row['SUMLEV']=='050': pe['K'+row['COUNTY']]=row
    acs=json.load(open(BASE+'fc2/acs2024_mi.json'))
    return r,geo,pe,acs,gpid,gcid
