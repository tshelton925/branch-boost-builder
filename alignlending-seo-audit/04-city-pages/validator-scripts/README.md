# City-page fact-check validators (from fact-check group 2)

These are the scripts fact-checker #2 used to verify Wayne/Macomb/St. Clair/Monroe/Lenawee city pages against county millage reports, Census ACS/population data and ZIP-to-place geography. They can be reused as **pre-publish validators** whenever city pages are regenerated or the annual millage and Census refresh runs.

- `extract.py`: pulls checkable claims (millage, population, ZIPs, prices, income tax) from city page text.
- `coherence.py`: internal consistency checks (hero vs stats vs FAQ).
- `millmatch.py`, `rates.py`: compare millage claims against certified county rate tables.
- `pop.py`, `acsmatch.py`, `geo.py`: Census population, ACS values and ZIP/place geography checks.
- `score.py`, `build.py`: scoring and report/CSV assembly.

Note: paths inside the scripts point at the audit session's scratch data directory (the crawl's `text/` files and downloaded source tables). Point them at your own crawl export and source files before re-running.
