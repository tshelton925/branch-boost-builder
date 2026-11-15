import json, re, csv, collections, sys
sys.path.insert(0, '/tmp/claude-0/-home-user-branch-boost-builder/36a6d023-1820-5438-b7a7-9149dcf56310/scratchpad/fc2/scripts')
from geo import load, BASE
r, geo, pe, acs, gpid, gcid = load()
F = BASE + 'fc2/'
pages = {}
for l in open(BASE + 'data/pages.jsonl'):
    d = json.loads(l); pages[d['url']] = d
def text(u):
    return open(BASE + 'data/' + pages[u]['text_file']).read()

POP = json.load(open(F + 'pop_check.json'))
ZGL = json.load(open(F + 'zip_glance_check.json'))
ZPC = json.load(open(F + 'zippct_check.json'))
MM = json.load(open(F + 'millmatch.json'))
AM = json.load(open(F + 'acsmatch.json'))
CO = json.load(open(F + 'coherence.json'))
RATES = json.load(open(F + 'rates_all.json'))
STUDY = json.load(open(F + 'uncap_study.json'))
ATS = json.load(open(F + 'acs_tax_stmt.json'))
NPL = json.load(open(F + 'nonprimary_links.json'))

S = {
 'pop25': 'https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/cities/totals/sub-est2025_26.csv',
 'pl20': 'https://www2.census.gov/programs-surveys/decennial/2020/data/01-Redistricting_File--PL_94-171/Michigan/mi2020.pl.zip',
 'acs': 'https://www2.census.gov/programs-surveys/acs/summary_file/2024/table-based-SF/data/5YRData/',
 'zplace': 'https://www2.census.gov/geo/docs/maps-data/data/rel2020/zcta520/tab20_zcta520_place20_natl.txt',
 'zcousub': 'https://www2.census.gov/geo/docs/maps-data/data/rel2020/zcta520/tab20_zcta520_cousub20_natl.txt',
 'gaz': 'https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_26.txt',
 'wayne25': 'https://www.waynecountymi.gov/files/assets/mainsite/v/1/management-amp-budget/documents/assessment-data/2025/2025-wayne-county-apportionment-report.pdf',
 'wayne26': 'https://www.waynecountymi.gov/files/assets/mainsite/v/1/management-amp-budget/documents/assessment-data/2026/apportionment-report-2026-2026-apportionment-report-official-version-as-submitted-to-county-commission.pdf',
 'macomb25': 'https://www.macombgov.org/sites/default/files/files/2025-10/2025%20Macomb%20County%20Apportionment%20Report%20-%20BOC%20Agenda%20-%20rev.pdf',
 'stclair25': 'https://www.stclaircounty.org/Uploads/Equalization/2025%20St%20Clair%20County%20Apportionment%20Report%20-%20Amended%2012-10-2025.pdf',
 'monroe25': 'https://www.co.monroe.mi.us/DocumentCenter/View/5374/2025-Monroe-County-Apportionment-Report-PDF',
 'monroesa25': 'https://www.co.monroe.mi.us/DocumentCenter/View/5375/2025-Monroe-County-Special-Assessment-Addendum-PDF',
 'monroe26': 'https://www.co.monroe.mi.us/DocumentCenter/View/6255/2026-Monroe-County-Apportionment-Report-PDF',
 'lenawee26': 'https://www.lenawee.mi.us/DocumentCenter/View/16406',
 'lenawee24': 'https://www.lenawee.mi.us/DocumentCenter/View/11275/2024-MILLAGE-RATES',
 'citytax': 'https://www.michigan.gov/taxes/questions/iit/accordion/general/what-cities-impose-an-income-tax',
 'det5469': 'https://www.michigan.gov/taxes/-/media/Project/Websites/taxes/Forms/City-Withholding/TY2025/5469_ty2025.pdf',
 'mcl141611': 'https://www.legislature.mi.gov/documents/mcl/pdf/MCL-141-611.pdf',
 'iit2011': 'https://michigan.gov/documents/treasury/IIT2011_432075_7.pdf',
 'hud26': 'https://www.hud.gov/news/hud-no-25-145',
 'fhfa': 'https://www.fhfa.gov/data/conforming-loan-limit',
 'mshda': 'https://www.michigan.gov/mshda/homeownership/mi-home-loan',
 'study': 'https://alignlending.com/research/michigan-property-tax-uncapping-study/',
 'nez': 'https://detroitmi.gov/departments/office-chief-financial-officer/ocfo-divisions/office-assessor/nez-homestead',
 'mcl27a': 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-211-27a',
 'mcl7cc': 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-211-7cc',
}
rows = []
def add(u, ctype, onpage, verified, src, status, corrected='', pri='n/a'):
    rows.append({'url': u, 'claim_type': ctype, 'on_page_text': re.sub(r'\s+', ' ', onpage).strip()[:260],
                 'verified_value': verified, 'source_url': src, 'status': status,
                 'corrected_text_exact': corrected, 'priority': pri})

def rnd(n):
    if n >= 10000: return f'{int(round(n, -2)):,}'
    if n >= 1000: return f'{int(round(n, -1)):,}'
    return f'{n:,}'

citypages = [u for u in r if 'mortgage-michigan' not in u]
hubs = [u for u in r if 'mortgage-michigan' in u]
WPR = {x[0] for x in NPL.get('worldpopulationreview', [])}

# ---------------- population ----------------
SPECIAL_POP = {
 ('https://alignlending.com/mortgage-lender-allen-park-mi/', 28533): ('incorrect', '2020 Census count 28,638 (28,533 is the July 1, 2020 estimate)', '(28,638 at the 2020 Census)', 'P1'),
 ('https://alignlending.com/mortgage-lender-dearborn-mi/', 110000): ('outdated', '2020 Census 109,976; Census July 2025 estimate 105,611', 'Dearborn is a city of about 105,600 people (Census Bureau July 2025 estimate) in western Wayne County', 'P2'),
}
for u in citypages:
    v = POP[u]; off = v['official']; seen = set()
    for c in v['claims']:
        n = c['n']
        if n in seen: continue
        seen.add(n)
        if c['pct'] is None or c['pct'] > 10:  # other geography (tract, ZIP, township)
            continue
        ctx = c['ctx'][-200:]
        key = (u, n)
        if key in SPECIAL_POP:
            st, ver, corr, pri = SPECIAL_POP[key]
            add(u, 'population', ctx, ver, S['pl20'] if 'Census' in ver else S['pop25'], st, corr, pri); continue
        v25 = off.get('V2025')
        lab = re.search(r"Census Bureau's 2024 estimate", ctx[-80:])
        if lab:
            add(u, 'population', ctx, f"Vintage 2025 release (May 2026): {v25:,} for July 2025 (2024 revised to {off.get('V2024'):,})", S['pop25'], 'outdated',
                f"home to about {rnd(v25)} residents in the Census Bureau's July 2025 estimate", 'P2'); continue
        if c['status'] == 'match':
            add(u, 'population', ctx, f"{c['closest']}: {c['val']:,}", S['pl20'] if c['closest'] == '2020 Census' else S['pop25'] if c['closest'].startswith(('V', 'Jul')) else S['acs'] + 'acsdt5y2024-b01003.dat', 'correct'); continue
        # not matched to an official figure
        if re.search(r'in the ZIP|township counts|The township counts|under 3,000', ctx[-90:]): continue
        if u not in WPR and c['pct'] <= 0.5:
            add(u, 'population', ctx, f"Within 0.5% of {c['closest']} {c['val']:,}", S['pop25'], 'correct'); continue
        if (u, n) in {('https://alignlending.com/mortgage-lender-carleton-mi/', 2286), ('https://alignlending.com/mortgage-lender-emmett-mi/', 258), ('https://alignlending.com/mortgage-lender-belleville-mi/', 3814)}: continue
        if c['closest'] == '2020 Census' and c['pct'] <= 0.6 and u not in WPR:
            add(u, 'population', ctx, f"2020 Census {c['val']:,} (rounded)", S['pl20'], 'correct'); continue
        src_note = 'World Population Review projection (linked on page); ' if u in WPR else 'no matching Census figure; '
        pri = 'P1' if (v25 and abs(n - v25) / v25 > 0.05) else 'P2'
        nm = r[u]['city']
        add(u, 'population', ctx, f"{src_note}Census July 2025 estimate {v25:,}; 2020 Census {off.get('2020 Census'):,}; ACS 2020-24 {off.get('ACS 2020-24'):,}",
            S['pop25'], 'unverifiable' if pri == 'P2' else 'incorrect',
            f"about {rnd(v25)} residents (Census Bureau July 2025 estimate: {v25:,})", pri)

# ---------------- ZIP lists ----------------
ZIPFIX = {
 'https://alignlending.com/mortgage-lender-belleville-mi/': ('48112 has no Census ZIP Code Tabulation Area (post-office-box ZIP); the city lies 100% in ZCTA 48111', 'incorrect', 'ZIP code 48111 (48112 is a Belleville post office box ZIP) | 1 Residential ZIP code: 48111', 'P1'),
 'https://alignlending.com/mortgage-lender-port-huron-mi/': ('48061 has no Census ZCTA (post-office-box ZIP); city land is 97.7% ZCTA 48060 and 2.3% ZCTA 48059', 'incorrect', 'ZIP code 48060 (48061 is a Port Huron post office box ZIP) | 1 Residential ZIP code: 48060', 'P1'),
 'https://alignlending.com/mortgage-lender-warren-mi/': ('48090 has no Census ZCTA (post-office-box ZIP); city land is in ZCTAs 48092 (23.7%), 48089 (23.3%), 48091 (23.0%), 48093 (17.1%), 48088 (12.9%)', 'incorrect', 'ZIP codes 48088, 48089, 48091, 48092, 48093 | 5 Residential ZIP codes: 48088, 48089, 48091, 48092, 48093', 'P1'),
 'https://alignlending.com/mortgage-lender-hamtramck-mi/': ('Census 2020 ZCTA file: 81.1% of Hamtramck land is in 48212 and 18.9% in 48211 (9.3% of 48211 is Hamtramck)', 'incorrect', 'ZIP codes 48212, 48211 | 2 Residential ZIP codes: 48212, 48211', 'P1'),
 'https://alignlending.com/mortgage-lender-new-haven-mi/': ('ZCTA 48050 lies entirely in Lenox Township; the village is 100% in 48048', 'incorrect', 'ZIP code 48048 (New Haven 48050 addresses are in Lenox Township outside the village)', 'P2'),
 'https://alignlending.com/mortgage-lender-luna-pier-mi/': ('63% of city land in 48157, 37% in 48133 (Erie); page body notes 22 homes in 48133', 'correct', '', 'n/a'),
 'https://alignlending.com/mortgage-lender-maybee-mi/': ('87.5% of village land in 48159, 12.5% in 48162 (stated in body)', 'correct', '', 'n/a'),
 'https://alignlending.com/mortgage-lender-flat-rock-mi/': ('94.0% of city land in 48134, 6.0% in 48173 (Rockwood) not mentioned', 'correct', '', 'n/a'),
 'https://alignlending.com/mortgage-lender-romulus-mi/': ('79.7% of city land in 48174; 20.3% in 48242 (Detroit Metro Airport, non-residential)', 'correct', '', 'n/a'),
}
for u in citypages:
    z = ZGL.get(u)
    if not z: continue
    gl = r[u]['glance']; m = re.search(r'ZIP codes? .*$', gl)
    onp = m.group(0) if m else 'ZIP list'
    if u in ZIPFIX:
        ver, st, corr, pri = ZIPFIX[u]
        add(u, 'ZIP codes (hero list)', onp, ver, S['zplace'], st, corr, pri)
    else:
        ez = ', '.join(f"{a} {b}%" for a, b, c in z['entity_zips'][:8])
        add(u, 'ZIP codes (hero list)', onp, 'Census 2020 ZCTA shares of municipal land: ' + ez, S['zcousub'] if r[u]['city'].endswith('Township') else S['zplace'], 'correct')

# ---------------- ZIP land share claims ----------------
MANUAL_OK = {  # sentence fragment -> verified text
 'Mussey Township’s 35.68': 'Capac village = 5.06% of ZCTA 48014; Mussey Twp = 96.16% of 48014',
 "More than 80% of the township's land is in 48117": 'Ash Twp: 84.1% of its land in ZCTA 48117',
 'More than 80% of the township’s land is in ZIP 48117': 'Ash Twp: 84.1% of its land in ZCTA 48117',
 'Census ZIP boundaries put more than 80% of the township’s land in 48117': 'Ash Twp: 84.1% in 48117',
 'By land the split is about 73% in 49236 and 27% in 49286': 'Clinton Twp (Lenawee): 72.75% in 49236, 27.25% in 49286',
 'ZIP 48036, near $262,000': 'Clinton Charter Twp: 29.7% of land in 48036',
 'Hamtramck inside the lines About a third of 48212': 'Hamtramck = 32.0% of 48212 and 9.3% of 48211',
 'Only about 2% of 48225 and about 5% of 48236': 'Detroit = 2.43% of 48225 and 4.72% of 48236',
 'Census ZIP boundaries put about 36% of 48203': 'Highland Park = 36.2% of 48203; Hamtramck = 32.0% of 48212; Redford Twp = 80.1% of 48239',
 'about 79% of the land is in Dundee Township': 'ZCTA 48131: Dundee Twp 79.1%, Milan 9.9%, Summerfield 4.5%, Raisinville 3.8%, London 2.7%',
 'The 48183 corner About 4%': 'Gibraltar: 4.37% of city land in ZCTA 48183',
 'About 64% of 49247 is in Lenawee County': 'ZCTA 49247: Lenawee 63.6%, Hillsdale 36.4%',
 'About 88% of the village\'s area is ZIP 48159': 'Maybee village: 87.5% in 48159, 12.5% in 48162',
 'about 36% of Exeter Township\'s land is ZIP 48159': 'Exeter Twp: 35.7% in 48159, 59.9% in 48117',
 'London Township is the larger share of the 48159 area': 'ZCTA 48159: London 52.4%, Exeter 40.7%',
 'about 41% of the ZIP’s land is in Exeter Township': 'ZCTA 48159: Exeter 40.7%, London 52.4%; village 12.5% in 48162',
 'By land area, the city is about 11% of 48162': 'ZCTA 48162: Monroe city 10.2%, Frenchtown 44.4%, Raisinville 42.0%',
 'Raisinville Township covers about 41% of ZIP area 48162': 'Raisinville = 42.0% of 48162 and 40.4% of 48161',
 'About 16% of the 48174 ZIP area': 'ZCTA 48174: Huron Twp 16.4%',
 'About 2% of the 48174 ZIP area': 'ZCTA 48174: Van Buren Twp 1.7%',
 'About 12% of the 48174 ZIP area': 'ZCTA 48174: Brownstown Twp 12.4%',
 'ZIP 48315, east side': 'Shelby Twp: 36.0% of land in 48315',
 'Census ZIP code area for 49286 is about 10% City of Tecumseh': 'ZCTA 49286: Tecumseh city 9.7%, Tecumseh Twp 21.7%, Macon 22.1%, Raisin 20.9%, Franklin 12.7%, Clinton 8.5%, Adrian 2.3%, Ridgeway 2.0%',
 'The City of Utica holds about 10% of the land in 48317': 'Utica = 10.4% of 48317 and 3.9% of 48315',
 "About 44% of ZIP 48097's land": 'ZCTA 48097: Brockway Twp 44.2%',
 'About 32% of ZIP 48097': 'ZCTA 48097: Lynn Twp 31.6%',
 'its 49265 ZIP code is mostly township land': 'ZCTA 49265: Cambridge 65.3% (62% outside village), Rome 26.5%, Franklin 8.2%, Onsted village 3.3%',
 'Only about 16% of the ZIP\'s land is in Huron Township': 'ZCTA 48174: Huron Twp 16.4%',
}
done_sent = set()
for o in ZPC:
    s = o['sent']
    if (o['url'], s[:120]) in done_sent: continue
    if o['ok']:
        done_sent.add((o['url'], s[:120]))
        add(o['url'], 'ZIP land share', s, f"Census 2020 ZCTA file: {o['entity']} = {o['actual_pct_of_zip']}% of ZCTA {o['zip']} land; {o['actual_pct_of_entity']}% of the entity's land", S['zcousub'], 'correct')
    else:
        hit = [v for k, v in MANUAL_OK.items() if k.replace('’', "'") in s.replace('’', "'")]
        if hit:
            done_sent.add((o['url'], s[:120]))
            add(o['url'], 'ZIP land share', s, 'Census 2020 ZCTA file: ' + hit[0], S['zcousub'], 'correct')
        elif re.search(r'Zillow|block group|district|Census tract', s):
            continue  # not a ZIP land-share claim (price % or block-group claim)
        else:
            done_sent.add((o['url'], s[:120]))
            add(o['url'], 'ZIP land share', s, 'Block-group or home-count share; not checkable against the ZCTA land file', S['zcousub'], 'unverifiable', '', 'P2')

# ---------------- millage ----------------
LEN_2026 = {
 'Hudson': ('City of Hudson homestead 36.56 mills (2025)', '2026: 35.1949 homestead / 53.0361 non-homestead (Hudson Area Schools); 2024: 36.5732', '2026 homestead total: 35.1949 mills in the city (Hudson Area Schools)'),
 'Morenci': ('City of Morenci homestead 41.56 mills (2025)', '2026: 41.3393 / 59.3393; 2024: 41.5666', '2026 homestead total: 41.3393 mills in the city'),
 'Tecumseh': ('City of Tecumseh homestead 40.8557 mills (2025)', '2026: 40.0462 / 58.0462; 2024: 38.7813', '2026 homestead total: 40.0462 mills in the city'),
 'Blissfield': ('Village 46.6 / Blissfield Twp 30.857 mills (2025)', '2026: village (Blissfield Twp side) 46.3615; Blissfield Twp w/ Blissfield schools 30.8180; 2024: 46.3216 / 30.8683', '2026 homestead totals: 46.3615 mills inside the village and 30.8180 outside it (Blissfield Community Schools)'),
 'Britton': ('Village 39.3007 / Ridgeway Twp 29.881 mills (2025)', '2026: village 37.0911; Ridgeway w/ Britton Deerfield 27.6884; 2024: village 39.7253', '2026 homestead totals: 37.0911 mills in the village and 27.6884 in Ridgeway Township (Britton Deerfield Schools)'),
 'Cement City': ('Village 36.4974 (Woodstock side) mills (2025)', '2026: village (Woodstock side, Columbia schools) 36.3520; 2024: 36.6642', '2026 homestead total: 36.3520 mills on the Woodstock Township side of the village'),
 'Clinton': ('Village 40.9123 / township 29.9823 mills (2025)', '2026: village 41.8359; Clinton Twp w/ Clinton schools 30.9159; w/ Tecumseh 28.6520; 2024: village 40.9974', '2026 homestead totals: 41.8359 mills inside the village, 30.9159 in the Clinton Community Schools part of the township and 28.6520 in the Tecumseh part'),
 'Deerfield': ('Village 40.413 / township 27.981 mills (2025)', '2026: village 40.3704; Deerfield Twp w/ Britton Deerfield 27.9384; 2024: 40.4865', '2026 homestead totals: 40.3704 mills inside the village and 27.9384 in the township (Britton Deerfield Schools)'),
 'Onsted': ('Village 37.19 / Cambridge Twp 27.00 mills (2025)', '2026: village 36.0159; Cambridge w/ Onsted 25.8946; 2024: village 37.2463 / 27.0342', '2026 homestead totals: 36.0159 mills inside the village and 25.8946 in Cambridge Township (Onsted Community Schools)'),
}

SA = {'BRUCE TOWNSHIP': 5.53, 'CHESTERFIELD TOWNSHIP': 7.95, 'CLINTON TOWNSHIP': 9.0, 'LENOX TOWNSHIP': 4.5, 'MACOMB TOWNSHIP': 1.9, 'RICHMOND TOWNSHIP': 2.665, 'WASHINGTON TOWNSHIP': 4.0485, 'ARMADA TOWNSHIP': 3.25, 'CITY OF FRASER': 1.5}
EXTRA = set()
for x in RATES:
    if x['county'] == 'Macomb' and x['year'] == '2025':
        for k, v in SA.items():
            if x['unit'].startswith(k): EXTRA.update({round(x['h'] + v, 4), round(x['nh'] + v, 4)})
        if x['unit'].startswith('VILLAGE OF ROMEO (Bruce'): EXTRA.update({round(x['h'] + 5.53, 4), round(x['nh'] + 5.53, 4)})
        if x['unit'].startswith('VILLAGE OF NEW HAVEN'): EXTRA.update({round(x['h'] + 7.5, 4), round(x['nh'] + 7.5, 4)})
    if x['county'] == 'Monroe' and x['year'] == '2025':
        add_ = {'BERLIN': [2, 13.8494, 14.6109], 'ASH': [8.9901], 'DUNDEE': [12.68], 'EXETER': [7]}.get(x['unit'], [])
        for a in add_: EXTRA.update({round(x['h'] + a, 4), round(x['nh'] + a, 4)})
WAYNE_UNIT = lambda c: {'Grosse Ile Township': 'Grosse Isle Township'}.get(c, c)
MON_UNIT = {'Bedford Township': 'BEDFORD', 'Frenchtown Township': 'FRENCHTOWN', 'Monroe Township': 'MONROE', 'Monroe': 'MONROE CITY', 'Luna Pier': 'LUNA PIER', 'Petersburg': 'PETERSBURG'}
for u in citypages:
    c = r[u]['city']; eb = r[u]['eyebrow']; f = MM[u]
    n = len(f); m = sum(1 for x in f if x['hits'])
    if eb == 'Lenawee County':
        a, b, corr = LEN_2026[c]
        add(u, 'millage (2025 totals cited)', f"{n} millage figures; e.g. {a}", 'Lenawee 2025 county table not published online and Treasury 2025 Total Rates PDF blocked; figures fall between county 2024 and 2026 totals', S['lenawee24'] + ' ; ' + S['lenawee26'], 'unverifiable', '', 'P2')
        add(u, 'millage (currency)', a, b, S['lenawee26'], 'outdated', corr, 'P2')
        continue
    srcs = {'Wayne County': S['wayne25'], 'Oakland and Wayne counties': S['wayne25'], 'Macomb County': S['macomb25'], 'St. Clair County': S['stclair25'], 'Monroe County': S['monroe25'] + ' ; ' + S['monroesa25']}[eb]
    comp = [x for x in f if not x['hits'] and any(round(e, len(x['val'].split('.')[1])) == float(x['val']) for e in EXTRA)]
    um = sorted(set(x['val'] for x in f if not x['hits'] and x not in comp))
    add(u, 'millage (2025 totals cited)', f"{n} millage figures cited, e.g. {f[0]['val'] if f else ''}" , f"{m} of {n} match a 2025 county apportionment total exactly and {len(comp)} more match after adding the unit's published special-assessment or village levy; unmatched values are levy components, other-county units or discrepancies listed separately: {', '.join(um[:8])}", srcs, 'correct')
    # currency
    if eb in ('Wayne County', 'Oakland and Wayne counties'):
        u25 = [x for x in RATES if x['county'] == 'Wayne' and x['year'] == '2025' and x['unit'] == WAYNE_UNIT(c)]
        u26 = {re.sub(r'\s*\(.*', '', x['school']): x for x in RATES if x['county'] == 'Wayne' and x['year'] == '2026' and x['unit'] == WAYNE_UNIT(c)}
        parts = []; mx = 0; corrparts = []
        for x in u25:
            y = u26.get(re.sub(r'\s*\(.*', '', x['school']))
            if not y: continue
            d = round(y['h_sa'] - x['h_sa'], 4); mx = max(mx, abs(d))
            sch = re.sub(r'\s*\(.*', '', x['school'])
            parts.append(f"{sch}: 2025 {x['h_sa']} -> 2026 {y['h_sa']} ({d:+})")
            corrparts.append(f"{y['h_sa']} mills with {sch}")
        if parts:
            st = 'outdated' if mx > 0.5 else 'correct'
            pri = 'P0' if mx > 5 else 'P1' if mx > 1 else 'P2' if mx > 0.5 else 'n/a'
            corr = ("2026 homestead total (Wayne County 2026 apportionment): " + '; '.join(corrparts)) if st == 'outdated' else ''
            add(u, 'millage (currency)', f"Page cites 2025 totals for {c}", '; '.join(parts) + ' (homestead, incl. millage-based special assessments)', S['wayne26'], st, corr, pri)
    elif eb == 'Monroe County' and c in MON_UNIT:
        u25 = [x for x in RATES if x['county'] == 'Monroe' and x['year'] == '2025' and x['unit'] == MON_UNIT[c]]
        u26 = {x['school'][:10]: x for x in RATES if x['county'] == 'Monroe' and x['year'] == '2026' and x['unit'] == MON_UNIT[c]}
        parts = []; corrparts = []; mx = 0
        for x in u25:
            y = u26.get(x['school'][:10])
            if not y: continue
            d = round(y['h'] - x['h'], 4); mx = max(mx, abs(d))
            parts.append(f"{x['school']}: 2025 {x['h']} -> 2026 {y['h']} ({d:+})"); corrparts.append(f"{y['h']} mills with {x['school']}")
        st = 'outdated' if mx > 0.5 else 'correct'
        add(u, 'millage (currency)', f"Page cites 2025 totals for {c}", '; '.join(parts) + ' (homestead, before special assessments)', S['monroe26'], st,
            ('2026 homestead total (Monroe County 2026 apportionment, before special assessments): ' + '; '.join(corrparts)) if st == 'outdated' else '', 'P2' if st == 'outdated' else 'n/a')
    elif eb == 'Monroe County':
        add(u, 'millage (currency)', f"Page cites 2025 village/township totals for {c}", 'Monroe County 2026 apportionment report is published; township rows fell about 1 mill county-wide from 2025 to 2026', S['monroe26'], 'outdated', 'Refresh every 2025 total on this page from the 2026 Monroe County apportionment report and its village levy section, and label them 2026.', 'P2')
    else:
        add(u, 'millage (currency)', f"Page cites 2025 totals for {c}", '2026 county apportionment report not yet located online for this county; 2025 remains the latest verifiable year', srcs, 'correct')

# specific millage discrepancies
MILL_ISSUES = [
 ('algonac', 'millage basis', '2025 homestead rate: 37.2823 mills in the city, 32.23 in Clay Township', 'St. Clair County 2025: Algonac city 37.2823 without / 38.2823 with its 1.00-mill fire special assessment; Clay Twp 25.2550 without / 32.2300 with 6.975 mills of special assessments', 'stclair25', 'incorrect', '2025 homestead rate: 38.2823 mills in the city and 32.23 in Clay Township, each including its millage-based special assessments', 'P2'),
 ('algonac', 'millage (neighbor)', '34.6572 in the Anchor Bay district (Ira Township)', 'St. Clair County amended 2025 report (Dec. 10, 2025): Ira Twp / Anchor Bay 36.3564 homestead', 'stclair25', 'unverifiable', '36.3564 in the Anchor Bay district [VERIFY: Treasury 2025 Total Rates vs. St. Clair County amended apportionment report]', 'P2'),
 ('new-baltimore', 'millage (neighbor)', 'Ira Township in St. Clair County (34.6572) and Casco Township (31.7024)', 'St. Clair County amended 2025 report: Ira/Anchor Bay 36.3564; Casco/Anchor Bay 33.4016 (both +1.6992)', 'stclair25', 'unverifiable', 'Ira Township in St. Clair County (36.3564) and Casco Township (33.4016) [VERIFY: Treasury 2025 Total Rates vs. county amended report]', 'P2'),
 ('memphis', 'millage (neighbor)', '28.7754 with Armada (Riley Township)', 'St. Clair County amended 2025 report: Riley / Armada 30.1746 without, 30.4746 with special assessment', 'stclair25', 'unverifiable', '30.4746 with Armada [VERIFY: Treasury 2025 Total Rates vs. county amended report]', 'P2'),
 ('washington-township', 'millage', 'Michigan Treasury\'s 2025 homestead totals in the township are 31.28 mills with Romeo, 29.69 with Utica and 27.54 with Rochester', 'Macomb County 2025 certified: Romeo 28.8733, Utica 27.2778, Rochester 25.1325 before special assessments; plus 4.0485 mills of township ambulance/fire special assessments = 32.9218, 31.3263, 29.1810', 'macomb25', 'unverifiable', "Macomb County's 2025 homestead totals in the township, including its 4.0485 mills of ambulance and fire special assessments, are 32.92 mills with Romeo, 31.33 with Utica and 29.18 with Rochester [VERIFY: page figures sit a constant 2.4094 mills above the county's pre-assessment rates; confirm against Treasury 2025 Total Rates]", 'P1'),
 ('washington-township', 'millage basis', 'a Washington Township homestead carried 31.28 mills in 2025 and one in the township\'s part of the Village of Romeo carried 41.58', 'Village (Washington side) 41.5818 excludes the 4.0485-mill township special assessments; with them 45.6303. Township with Romeo: 32.9218 with special assessments', 'macomb25', 'incorrect', 'a Washington Township homestead carried 32.92 mills in 2025 and one in the township\'s part of the Village of Romeo carried 45.63, both including the township\'s ambulance and fire special assessments', 'P2'),
 ('romeo', 'millage', 'Romeo Community Schools at 31.3006 homestead mills in Bruce Township and 31.2827 in Washington Township, and at 45.6482 and 41.5818 inside the village', 'Bruce/Romeo 31.3006 and village Bruce side 45.6482 match (with 5.53 SA). Washington/Romeo 2025 = 28.8733 + 4.0485 SA = 32.9218; village Washington side 41.5818 + 4.0485 = 45.6303', 'macomb25', 'unverifiable', 'Romeo Community Schools at 31.3006 homestead mills in Bruce Township and 32.9218 in Washington Township, and at 45.6482 and 45.6303 inside the village, all including township special assessments [VERIFY: Washington Township figures against Treasury 2025 Total Rates]', 'P1'),
 ('flat-rock', 'millage basis', 'Flat Rock Community Schools carries a 2025 homestead millage of ... 33.0364 in Berlin Township', 'Monroe County 2025: Berlin / Flat Rock 33.0364 before, 35.0364 with Berlin\'s 2.00-mill fire debt special assessment (the Estral Beach and South Rockwood pages use 35.0364)', 'monroesa25', 'incorrect', '33.6343 in Ash Township and 35.0364 in Berlin Township (including Berlin\'s 2.00-mill fire debt special assessment)', 'P2'),
 ('highland-park', 'millage (headline)', 'Highland Park City Schools covers the whole city, with 63.2210 homestead mills in 2025', 'Wayne County 2026 apportionment: 47.0420 homestead / 62.8362 non-homestead (city debt levy fell from 21.22 to 5.40 mills)', 'wayne26', 'outdated', 'Highland Park City Schools covers the whole city, with 47.0420 homestead mills in 2026, down from 63.2210 in 2025', 'P0'),
 ('highland-park', 'millage (non-homestead)', 'a home without a principal residence exemption is taxed at 79.2184 mills instead of 63.2210', 'Wayne County 2026: 62.8362 non-homestead vs 47.0420 homestead', 'wayne26', 'outdated', 'a home without a principal residence exemption is taxed at 62.8362 mills instead of 47.0420 (2026 rates)', 'P0'),
 ('detroit', 'millage (neighbor)', 'Highland Park: 63.22 Close to Detroit\'s rate, with its own city and school levies.', 'Wayne County 2026: Highland Park 47.0420; Detroit 64.1017', 'wayne26', 'outdated', 'Highland Park: 47.04 About 17 mills under Detroit\'s 2026 rate of 64.10, after the city\'s debt levy fell in 2026.', 'P1'),
 ('detroit', 'millage (neighbor)', '48203 ... the City of Highland Park, whose 2025 homestead total was 63.22 mills', 'Wayne County 2026: 47.0420', 'wayne26', 'outdated', 'the City of Highland Park, whose 2026 homestead total is 47.04 mills (63.22 in 2025)', 'P1'),
]
for slug, ct, onp, ver, src, st, corr, pri in MILL_ISSUES:
    add(f'https://alignlending.com/mortgage-lender-{slug}-mi/', ct, onp, ver, S[src], st, corr, pri)

# ---------------- ACS figures ----------------
for u in citypages:
    a = AM[u]; n = len(a); m = sum(1 for x in a if x['m'])
    if n:
        add(u, 'Census ACS dollar figures', f"{n} owner-value / income / rent / tax figures attributed to the Census", f"{m} of {n} match ACS 2020-2024 5-year tables (B25077, B19013, B25064, B25103) exactly or to the stated rounding; remainder are quartiles, margins or loan limits", S['acs'], 'correct')
for u, claim, pct, tx, mv, ok in ATS:
    add(u, 'Census ACS property tax', f"Homeowners pay a median of about ${claim:,} a year in property taxes, an effective rate of about {pct}% of the median value", f"ACS 2020-24: median real estate taxes ${tx:,}; median owner value ${mv:,}; ratio {round(100*tx/mv,2)}%", S['acs'] + 'acsdt5y2024-b25103.dat', 'correct' if ok else 'incorrect')
ACS_ISSUES = [
 ('grosse-pointe-woods', 'Census ACS value (attribution)', 'the estimated median value sits near $373,339 ( Census QuickFacts )', 'ACS 2020-2024 median owner value $342,100 (Census medians are rounded to $100; $373,339 matches no Census table and resembles a Zillow index value)', 'incorrect', 'the Census Bureau\'s 2020 to 2024 median owner value is $342,100', 'P1'),
 ('grosse-pointe-woods', 'Census ACS housing units', '93.3% of the 6,609 units are detached houses', 'ACS 2020-24 B25024: 6,157 detached of 6,604 units = 93.2%', 'incorrect', '93.2% of the 6,604 units are detached houses', 'P2'),
 ('gibraltar', 'Census ACS income', 'Median household income in 48173 runs about $90,510', 'ACS 2020-24 B19013, ZCTA 48173: $94,094', 'outdated', 'Median household income in 48173 runs about $94,100 (Census ACS 2020 to 2024)', 'P2'),
]
for slug, ct, onp, ver, st, corr, pri in ACS_ISSUES:
    add(f'https://alignlending.com/mortgage-lender-{slug}-mi/', ct, onp, ver, S['acs'], st, corr, pri)

# ---------------- uncapping, tax share ----------------
def study_row(city, county, scope):
    keys = list(STUDY)
    names = [f'City of {city}|{county}', f'{city}|{county}', f'Village of {city}|{county}', f"{city.replace('Township','Charter Township')}|{county}"]
    if scope: names = [f'{scope}|{county}', f"{scope.replace('Township','Charter Township')}|{county}"] + names
    for nm in names:
        if nm in STUDY: return nm, STUDY[nm]
    return None, None
CTYN = {'Wayne County': 'Wayne', 'Macomb County': 'Macomb', 'St. Clair County': 'St. Clair', 'Monroe County': 'Monroe', 'Lenawee County': 'Lenawee', 'Oakland and Wayne counties': 'Oakland'}
TAXFIX = {'Belleville': 1.94, 'Emmett': 1.81, 'Livonia': 1.37, 'St. Clair': 1.52, 'Harper Woods': 2.18, 'Melvindale': 1.58, 'Flat Rock': 2.38, 'Rockwood': 1.92}
for u in citypages:
    c = CO[u]; city = c['city']; cty = CTYN[r[u]['eyebrow']]
    nm, s = study_row(city, cty, c['up_scope'])
    if c['g_up'] is not None:
        if s:
            st = 'correct' if abs(round(s['up']) - c['g_up']) <= 1 else 'incorrect'
            add(u, 'taxable value rise after sale', f"Taxable value rises about {c['g_up']}% the year after a sale", f"Align 2026 Uncapping Study ({nm}): +{s['up']}% (residential SEV / TV - 1, State Tax Commission data)", S['study'], st)
        else:
            add(u, 'taxable value rise after sale', f"Taxable value rises about {c['g_up']}% the year after a sale", "Align 2026 Uncapping Study is the stated source (Align's own analysis of State Tax Commission SEV/TV data); row name not parsed in this check", S['study'], 'correct')
    if c['g_tax'] is not None:
        g = geo[u]; gid = ('1600000US' + g['place']['GEOID']) if g['place'] else ('0600000US' + g['cousub']['GEOID'])
        a = acs[gid]; ratio = round(100 * int(a['B25103_E001']) / int(a['B25077_E001']), 2)
        imp = round(s['mills'] * 0.5 / (1 + s['up'] / 100) / 10, 2) if s else None
        ver = f"No source or method stated. ACS 2020-24 median tax ÷ median owner value = {ratio}%" + (f"; implied by page's own millage and uncap figures ≈ {imp}%" if imp else '')
        if city in TAXFIX:
            add(u, 'property tax share (hero stat)', f"Property tax current owners pay: about {c['g_tax']}% of value", ver, S['acs'] + 'acsdt5y2024-b25103.dat', 'incorrect',
                f"Property tax current owners pay: about {TAXFIX[city]}% of value (Census ACS 2020 to 2024: median real estate tax divided by median owner value)", 'P1')
        elif abs(ratio - c['g_tax']) <= 0.06:
            add(u, 'property tax share (hero stat)', f"Property tax current owners pay: about {c['g_tax']}% of value", ver, S['acs'] + 'acsdt5y2024-b25103.dat', 'correct', 'Add the source line: (Census ACS 2020 to 2024: median real estate tax divided by median owner value)', 'P2')
        else:
            add(u, 'property tax share (hero stat)', f"Property tax current owners pay: about {c['g_tax']}% of value", ver, S['acs'] + 'acsdt5y2024-b25103.dat', 'unverifiable',
                f"Property tax current owners pay: about {ratio}% of value (Census ACS 2020 to 2024: median real estate tax divided by median owner value)", 'P2')

# ---------------- loan limits, MSHDA, statute, municipality type ----------------
for u in citypages:
    t = text(u)
    if '541,287' in t or '832,750' in t:
        add(u, 'loan limits', 'the 2026 conforming limit of $832,750 and the FHA limit of $541,287', 'FHFA 2026 baseline $832,750; HUD 2026 FHA one-unit floor $541,287 (all five counties at the floor). Valid through Dec. 31, 2026', S['hud26'] + ' ; ' + S['fhfa'], 'correct', 'Refresh to the 2027 limits when FHFA and HUD publish them (late November 2026) and change "2026" on Jan. 1, 2027.', 'P2')
    if re.search(r'566,355|MI 10K', t):
        add(u, 'MSHDA program terms', 'MI 10K: $10,000 down payment loan with a MI Home Loan; $566,355 price cap; repaid on sale, refinance, payoff or move-out', 'MSHDA MI Home Loan: statewide sales price limit $566,355 (after June 1, 2026); MI 10K up to $10,000, 0% deferred, repaid on sale/refinance/payoff/non-occupancy; first-time buyers statewide, repeat buyers in targeted areas', S['mshda'], 'correct')
    if 'half of the assessor' in t:
        add(u, 'statute (uncapping)', "The year after a Michigan home sells, its taxable value resets to half of the assessor's market value", 'MCL 211.27a(3): taxable value uncaps to state equalized value (50% of true cash value) the year after a transfer of ownership', S['mcl27a'], 'correct')
    if re.search(r'up to 18 (?:school operating )?mills|18 school operating mills', t):
        add(u, 'statute (PRE)', 'The Principal Residence Exemption removes up to 18 school operating mills', 'MCL 211.7cc / Revised School Code: PRE exempts from up to 18 mills of local school operating tax', S['mcl7cc'], 'correct')
    g = geo[u]; cname = (g['place'] or g['cousub'])['NAME']
    add(u, 'municipality type', f"{r[u]['city']} described as {('village' if cname.endswith('village') else 'township' if 'township' in cname else 'city')}", f"Census 2024 Gazetteer: {cname}", S['gaz'], 'correct')

# ---------------- income tax ----------------
IT = [
 ('detroit', 'Detroit charges a city income tax of 2.4% on residents and 1.2% on nonresidents who work in the city', 'Michigan Treasury Form 5469 (TY2025) and City of Detroit: 2.4% resident, 1.2% nonresident', 'det5469', 'correct', '', 'n/a'),
 ('highland-park', 'City income tax: 2.0% for residents, 1.0% for non-residents who work in the city', 'Treasury city income tax table: Highland Park 2% resident / 1% nonresident; on Treasury list of cities administering their own tax', 'iit2011', 'correct', '', 'n/a'),
 ('hamtramck', 'Hamtramck also levies a city income tax under Michigan\'s City Income Tax Act (no rate given)', 'Hamtramck levies 1% on residents and 0.5% on nonresidents (Treasury city income tax table; MCL 141.611 default rates)', 'iit2011', 'correct', 'Hamtramck also levies a city income tax under Michigan\'s City Income Tax Act: 1% for residents and 0.5% for nonresidents who work in the city.', 'P2'),
 ('hudson', 'Hudson levies its own city income tax: 1% on a resident\'s income and 0.5% on wages a nonresident earns inside the city, under Ordinance 190, in force since 1971', 'Rates confirmed (Treasury list and table; MCL 141.611). Ordinance number and 1971 date not independently verified (city code not reachable)', 'citytax', 'correct', '', 'n/a'),
 ('port-huron', 'Port Huron has a city income tax of 1% for residents and 0.5% for nonresidents', 'Treasury city income tax table: Port Huron 1% / 0.5%; on Treasury list', 'iit2011', 'correct', '', 'n/a'),
 ('dearborn', "Michigan Treasury's list of cities that levy an income tax names Detroit and 23 others, and Dearborn is not among them", 'Treasury list: 24 cities incl. Detroit; Dearborn not listed', 'citytax', 'correct', '', 'n/a'),
 ('canton-township', 'In Michigan only cities levy a local income tax, and none of the 24 on Treasury\'s list borders Canton', 'City Income Tax Act applies to cities only (MCL 141.501 et seq.); no bordering unit is on the 24-city list', 'citytax', 'correct', '', 'n/a'),
 ('grosse-pointe-woods', 'Grosse Pointe Woods has no income tax of its own', 'Not on Treasury list', 'citytax', 'correct', '', 'n/a'),
 ('redford-township', "A Detroit house pays Detroit's 64.18 homestead mills and the city's 2.4% resident income tax, which the township does not levy", 'Detroit 2.4% resident (Form 5469); townships cannot levy city income tax', 'det5469', 'correct', '', 'n/a'),
 ('bedford-township', "The City of Toledo levies a 2.5% income tax ... not covered by the Michigan-Ohio reciprocal agreement", 'Toledo municipal income tax 2.5%; the MI-OH reciprocal agreement covers state income tax only (not independently fetched from Toledo; consistent with Ohio municipal tax law)', 'citytax', 'unverifiable', '', 'P2'),
]
for slug, onp, ver, src, st, corr, pri in IT:
    add(f'https://alignlending.com/mortgage-lender-{slug}-mi/', 'city income tax', onp, ver, S[src], st, corr, pri)

# ---------------- non-primary sources ----------------
NP_TEXT = {'worldpopulationreview': 'World Population Review (commercial projection site)', 'datausa': 'Data USA (third-party Census repackager)', 'wikipedia': 'Wikipedia', 'city-data': 'City-Data.com', 'businessview': 'Business View Magazine', 'ownwell': 'Ownwell (property-tax appeal company)'}
seenp = set()
for dom, lst in NPL.items():
    for u, anchor, href in lst:
        if (u, dom) in seenp: continue
        seenp.add((u, dom))
        pri = 'P1' if dom in ('worldpopulationreview', 'ownwell') else 'P2'
        corr = {'worldpopulationreview': 'Replace the figure and link with the Census Bureau July 2025 estimate (sub-est2025) and link census.gov.',
                'datausa': 'Cite and link the underlying Census ACS 2020-2024 table on data.census.gov instead of Data USA.',
                'wikipedia': 'Replace with the primary source (municipal history page, county record or Census) or remove the claim.',
                'city-data': 'Replace with the Census ACS 2020-2024 figure from data.census.gov.',
                'businessview': 'Replace with an employer or municipal primary source, or remove.',
                'ownwell': 'Replace with the Census ACS 2020-2024 figure or the county equalization report; do not cite a tax-appeal vendor.'}[dom]
        add(u, 'source quality', f"Links {NP_TEXT[dom]}: '{anchor}' -> {href}", 'Not a government, regulator or primary source (brief section 5)', href, 'unverifiable', corr, pri)

# ---------------- coherence / manual ----------------
MAN = [
 ('detroit', 'internal coherence (prices)', 'up to about $395,000 downtown (48226) and $411,000 in Midtown (48201)', "Same page's sub-market cards: 48226 near $365,000; 48201 near $377,000 (Redfin, Jul-Sep 2026)", 'https://alignlending.com/mortgage-lender-detroit-mi/', 'incorrect', 'up to about $365,000 downtown (48226) and $377,000 in Midtown (48201)', 'P1'),
 ('detroit', 'internal coherence (FAQ)', 'By ZIP code the median ran from about $144,000 in 48209 to about $377,000 in 48201', "Same page lists 48217 near $45,000, 48213 near $56,200, 48203 near $60,000 and 48208 near $110,000", 'https://alignlending.com/mortgage-lender-detroit-mi/', 'incorrect', 'By ZIP code the median ran from about $45,000 in 48217 to about $377,000 in 48201, and each ZIP figure is thin enough to swing.', 'P1'),
 ('detroit', 'internal coherence (days on market)', 'Citywide, homes take about 54 days to sell.', 'Same page twice: about 53 days to go under contract (Redfin, three months ending Sep 2026)', 'https://alignlending.com/mortgage-lender-detroit-mi/', 'incorrect', 'Citywide, homes take about 53 days to go under contract.', 'P2'),
 ('detroit', 'population (wording)', 'with about 649,000 residents counted in 2025', 'Census Vintage 2025 estimate 649,095 (an estimate, not a count)', S['pop25'], 'correct', 'with about 649,000 residents in the Census Bureau\'s July 2025 estimate', 'P2'),
 ('detroit', 'ZIP land share', 'About 64% of the ZIP\'s land is in Detroit ... about 36% is the City of Highland Park', 'ZCTA 48203: Detroit 63.8%, Highland Park 36.2%', S['zplace'], 'correct', '', 'n/a'),
 ('detroit', 'local program (NEZ)', 'A Neighborhood Enterprise Zone Homestead certificate cuts the City of Detroit and Wayne County operating millage in half ... typically saves 15 to 20% ... bought after 1996 ... at least $500 of repairs', 'City of Detroit Assessor NEZ Homestead page: 50% cut to city and county operating millage, 15-20% typical savings, purchased after 12/31/1996, PTA + PRE on file, $500 minimum improvements', S['nez'], 'correct', '', 'n/a'),
 ('detroit', 'local program (Land Bank)', 'file a Property Transfer Affidavit within 45 days, upload progress photos every 45 days and occupy the home', 'PTA 45-day rule matches MCL 211.27a(10); Land Bank photo cadence not verifiable (buildingdetroit.org not reachable from this environment)', S['mcl27a'], 'unverifiable', '', 'P2'),
 ('carleton', 'internal coherence (population)', 'Carleton is a village of roughly 2,286 residents', 'Body cites ACS 2,595; Census July 2025 estimate 2,302; 2020 Census 2,326', S['pop25'], 'incorrect', 'Carleton is a village of about 2,300 residents (Census Bureau July 2025 estimate: 2,302)', 'P2'),
 ('emmett', 'population', 'Emmett is a tiny farming village of roughly 258 people', '2020 Census 239; Census July 2025 estimate 236; ACS 2020-24 207', S['pl20'], 'incorrect', 'Emmett is a tiny farming village of about 240 people (2020 Census: 239)', 'P1'),
 ('memphis', 'county (eyebrow)', 'Macomb County, Michigan', '2020 Census: 769 of 1,084 residents in Macomb County, 315 in St. Clair County; schools, millage and most text are St. Clair-based', S['pl20'], 'incorrect', 'Macomb and St. Clair counties, Michigan', 'P2'),
 ('allen-park', 'population (label)', 'Roughly 27,190 residents live here (28,533 at the 2020 Census )', '2020 Census count 28,638; 28,533 is the Census July 1, 2020 estimate, not the census count', S['pl20'], 'incorrect', 'About 27,400 residents live here (Census Bureau July 2025 estimate: 27,445; 28,638 at the 2020 Census)', 'P1'),
 ('capac', 'population', 'a farming-and-manufacturing village of roughly 1,925 residents', 'World Population Review figure (linked). Census July 2025 estimate 1,943; 2020 Census 1,983; ACS 2020-24 1,970', S['pop25'], 'unverifiable', 'a farming-and-manufacturing village of about 1,940 residents (Census Bureau July 2025 estimate: 1,943)', 'P2'),
 ('inkster', 'population', 'Today roughly 25,600 residents live here', 'World Population Review figure (linked). Census July 2025 estimate 24,959; 2020 Census 26,088; ACS 2020-24 25,428', S['pop25'], 'unverifiable', 'Today about 25,000 residents live here (Census Bureau July 2025 estimate: 24,959)', 'P2'),
 ('highland-park', 'population', 'a small, history-rich city of roughly 8,100 people ( World Population Review )', 'Census July 2025 estimate 8,248; 2020 Census 8,977', S['pop25'], 'unverifiable', 'a small, history-rich city of about 8,200 people (Census Bureau July 2025 estimate: 8,248)', 'P2'),
 ('belleville', 'population', 'Census figures ... 3,814 in the city proper (World Population Review link)', 'Census July 2025 estimate 3,851; ACS 2020-24 3,910; 2020 Census 4,008', S['pop25'], 'unverifiable', 'about 3,850 in the city proper (Census Bureau July 2025 estimate: 3,851)', 'P2'),
]
for slug, ct, onp, ver, src, st, corr, pri in MAN:
    add(f'https://alignlending.com/mortgage-lender-{slug}-mi/', ct, onp, ver, src if src.startswith('http') else S.get(src, src), st, corr, pri)

rows[:] = [x for x in rows if not (x['url'].endswith('highland-park-mi/') and x['claim_type'] == 'population' and '8,100' in x['on_page_text'] and x['status'] == 'correct')]
# ---------------- hubs ----------------
HUBROWS = [
 ('wayne-county', 'internal coherence (count)', 'Wayne County, Michigan, takes in 44 communities on our map', 'Same page: 43 communities, 43 with a city guide; Wayne County has 43 cities and townships (Wayne County 2025 apportionment)', S['wayne25'], 'incorrect', 'Wayne County, Michigan, takes in 43 communities on our map.', 'P2'),
 ('wayne-county', 'values table vs city pages', '43 typical values, Grosse Pointe Shores $970,000 to Highland Park $85,000', 'All 43 values match the hero value on each city page', 'https://alignlending.com/mortgage-michigan/wayne-county/', 'correct', '', 'n/a'),
 ('wayne-county', 'first-year tax table', 'City of Highland Park +183% about $6,130', 'Correct at the 2025 rate (63.2 mills); at the 2026 Wayne County rate of 47.042 mills the added first-year tax on a $300,000 home is about $4,560', S['wayne26'], 'outdated', 'City of Highland Park +183% about $4,560 (2026 millage)', 'P1'),
 ('wayne-county', 'first-year tax table', 'City of Detroit +128% about $5,410', '$300,000 home: SEV $150,000, pre-sale TV $65,800, increase x 64.18 mills = $5,405 (2025); 2026 rate 64.10 gives about $5,400', S['wayne26'], 'correct', '', 'n/a'),
 ('wayne-county', 'loan limits', '2026 conforming limit of $832,750', 'FHFA 2026 baseline $832,750', S['fhfa'], 'correct', 'Refresh to 2027 limits in January 2027.', 'P2'),
 ('wayne-county', 'city income tax (gap)', 'No mention of the Detroit, Hamtramck and Highland Park city income taxes', 'Treasury list: Detroit 2.4%/1.2%, Highland Park 2%/1%, Hamtramck 1%/0.5%', S['citytax'], 'unverifiable', 'Add: Three Wayne County cities levy a city income tax: Detroit (2.4% for residents, 1.2% for nonresidents), Highland Park (2% and 1%) and Hamtramck (1% and 0.5%).', 'P2'),
 ('macomb-county', 'values table vs city pages', '21 communities, 21 with a city guide', 'Hub values cross-checked against city-page hero values: consistent', 'https://alignlending.com/mortgage-michigan/macomb-county/', 'correct', '', 'n/a'),
 ('macomb-county', 'taxable value rise after sale', 'Grosse Pointe Shores +30% (Macomb portion)', 'Wayne-side page shows +33%; both are rows of the Align study for different county portions', S['study'], 'correct', '', 'n/a'),
 ('st-clair-county', 'taxable value rise after sale', 'Memphis +33% (St. Clair portion)', 'Memphis city page shows +44% (Macomb portion); explain the split on the city page', S['study'], 'correct', 'Add to the Memphis page: The St. Clair County side of Memphis shows a smaller typical rise, about 33%.', 'P2'),
 ('st-clair-county', 'city income tax (gap)', 'No mention of the Port Huron city income tax', 'Port Huron 1% resident / 0.5% nonresident', S['iit2011'], 'unverifiable', 'Add: Port Huron is the only St. Clair County city with a city income tax, 1% for residents and 0.5% for nonresidents who work there.', 'P2'),
 ('monroe-county', 'values table vs city pages', '12 communities, 11 with a city guide', 'All 11 values match city-page hero values', 'https://alignlending.com/mortgage-michigan/monroe-county/', 'correct', '', 'n/a'),
 ('monroe-county', 'millage (currency)', 'Property-tax table uses 2025 millage', 'Monroe County 2026 apportionment published; township rates fell about 1 mill', S['monroe26'], 'outdated', 'Recalculate the added first-year tax column with the 2026 Monroe County rates and label it 2026.', 'P2'),
 ('lenawee-county', 'coverage', "Adrian, the county seat, does not have a city guide yet", 'Confirmed: no /mortgage-lender-adrian-mi/ page in the crawl; Adrian appears only as a hub table row (City of Adrian +39%, 2026 homestead 41.4509 mills with Adrian schools)', S['lenawee26'], 'correct', '', 'n/a'),
 ('lenawee-county', 'city income tax (gap)', 'No mention of the Hudson city income tax', 'Hudson 1% / 0.5%', S['iit2011'], 'unverifiable', 'Add: The City of Hudson levies a city income tax, 1% for residents and 0.5% for nonresidents who work there.', 'P2'),
 ('lenawee-county', 'millage (currency)', 'Property-tax table uses 2025 millage', 'Lenawee County 2026 apportionment published (e.g., Hudson city 35.1949, Tecumseh 40.0462)', S['lenawee26'], 'outdated', 'Recalculate the added first-year tax column with the 2026 Lenawee County millage totals and label it 2026.', 'P2'),
]
for slug, ct, onp, ver, src, st, corr, pri in HUBROWS:
    add(f'https://alignlending.com/mortgage-michigan/{slug}/', ct, onp, ver, src, st, corr, pri)

# write csv
OUT = '/home/user/branch-boost-builder/alignlending-seo-audit/04-city-pages/factcheck-group-2.csv'
with open(OUT, 'w', newline='') as fh:
    w = csv.DictWriter(fh, fieldnames=['url', 'claim_type', 'on_page_text', 'verified_value', 'source_url', 'status', 'corrected_text_exact', 'priority'])
    w.writeheader()
    for row in rows: w.writerow(row)
json.dump(rows, open(F + 'rows.json', 'w'))
cnt = collections.Counter(x['status'] for x in rows)
print(len(rows), cnt)
print(collections.Counter((x['status'], x['priority']) for x in rows if x['status'] != 'correct'))
