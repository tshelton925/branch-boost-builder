import re,json
B='/tmp/claude-0/-home-user-branch-boost-builder/36a6d023-1820-5438-b7a7-9149dcf56310/scratchpad/'
rows=[]
W=json.load(open(B+'fc2/wayne_rates.json'))
for yr in ('2025','2026'):
    for x in W[yr]:
        rows.append({'county':'Wayne','year':yr,'unit':x['unit'],'school':x['school'],'h':x['h'],'nh':x['nh'],'h_sa':x['h_sa'],'nh_sa':x['nh_sa'],'src':'wayne'+yr})
# Macomb 2025 (cols: 2024 h nh cp ip, 2025 h nh cp ip)
unit=None
for line in open(B+'dl/county/macomb_app2025.txt'):
    if re.match(r'^\s{10,}[A-Z][A-Z \.\']+(\(.*\))?\s*$',line) and 'APPORTIONMENT' not in line and 'CERTIFIED' not in line and 'MILL' not in line:
        unit=line.strip()
    m=re.match(r'^\s+(.+?)\s{2,}(\d{5})\s+((?:\d+\.\d{4}\s+){7}\d+\.\d{4})\s*$',line)
    if m and unit:
        v=[float(a) for a in m.group(3).split()]
        rows.append({'county':'Macomb','year':'2024','unit':unit,'school':m.group(1),'h':v[0],'nh':v[1],'h_sa':None,'nh_sa':None,'src':'macomb2025'})
        rows.append({'county':'Macomb','year':'2025','unit':unit,'school':m.group(1),'h':v[4],'nh':v[5],'h_sa':None,'nh_sa':None,'src':'macomb2025'})
# St Clair 2025
for line in open(B+'dl/county/stc_app2025.txt'):
    m=re.match(r'^(\S.*?)\s{2,}(?:([A-Z]+)\s+)?(\d{5})\s+(.+?)\s{2,}(\d+\.\d{4})\s+(\d+\.\d{4})\s+(\d+\.\d{4})\s+(\d+\.\d{4})\s*$',line)
    if m:
        rows.append({'county':'St. Clair','year':'2025','unit':m.group(1).strip()+(' village '+m.group(2) if m.group(2) else ''),'school':m.group(4),'h':float(m.group(5)),'nh':float(m.group(6)),'h_sa':float(m.group(7)),'nh_sa':float(m.group(8)),'src':'stclair2025'})
# Monroe 2025/2026: last 4 numbers PRE, COM, IND, NON-PRE
for yr,fn in (('2025','mon_app2025.txt'),('2026','mon_app2026.txt')):
    unit=None
    for line in open(B+'dl/county/'+fn):
        s=line.strip()
        if re.match(r'^[A-Z][A-Z \.]+$',s) and len(s)<30: unit=s
        m=re.match(r'^\s*(\d{5})\s+(.+?)\s{2,}((?:\d+\.\d{4}\s+){10,}\d+\.\d{4})\s*$',line)
        if m and unit:
            v=[float(a) for a in m.group(3).split()]
            rows.append({'county':'Monroe','year':yr,'unit':unit,'school':m.group(2),'h':v[-4],'nh':v[-1],'h_sa':None,'nh_sa':None,'src':'monroe'+yr})
# Lenawee 2026: last two numbers totals
unit=None; sect='T'
for line in open(B+'dl/county/len_app2026.txt'):
    if line.startswith('City:'): sect='C'
    if line.startswith('Village:'): sect='V'
    m=re.match(r'^(\S[A-Z ]*?)?\s{2,}([A-Za-z\-\. ]+?)\s{2,}((?:\d+\.\d{4}\s+){5}\d+\.\d{4})\s*$',line)
    m2=re.match(r'^([A-Z][A-Za-z ]+?)\s{2,}([A-Za-z\-\. ]+?)\s{2,}((?:\d+\.\d{4}\s+){5}\d+\.\d{4})\s*$',line)
    if m:
        if m.group(1) and m.group(1).strip(): unit=m.group(1).strip()
        v=[float(a) for a in m.group(3).split()]
        rows.append({'county':'Lenawee','year':'2026','unit':(sect+':')+(unit or ''),'school':m.group(2).strip(),'h':v[4],'nh':v[5],'h_sa':None,'nh_sa':None,'src':'lenawee2026'})
    s=line.strip()
    if sect=='V' and re.match(r'^[A-Z][A-Z ]+$',s): unit=s
json.dump(rows,open(B+'fc2/rates_all.json','w'),indent=0)
import collections
print(collections.Counter((r['county'],r['year']) for r in rows))
