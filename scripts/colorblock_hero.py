import re, glob

TARGET_SLUGS = [
    "about", "procedures", "achievements", "patient-stories", "blog",
    "patient-resources", "online-consultation", "contact",
    "piles-surgery", "hernia-repair", "gallbladder-removal",
    "fissure-treatment", "fistula-surgery", "appendix-surgery", "varicose-veins",
]

CTA_OLD = 'bg-teal-800 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-teal-900 hover:shadow-lg'
CTA_NEW = 'bg-amber-400 px-5 py-3 text-sm font-semibold text-teal-900 transition hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-lg'

CTA_OLD_SM = 'bg-teal-800 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-900'
CTA_NEW_SM = 'bg-amber-400 px-5 py-2.5 text-sm font-semibold text-teal-900 transition hover:bg-amber-300'

for slug in TARGET_SLUGS:
    path = f"/home/claude/drharishgowda-site/app/{slug}/page.tsx"
    s = open(path, encoding="utf-8").read()

    # find hero section start (first <section after the breadcrumb div)
    bc_idx = s.index('text-stone-400 sm:px-8">')
    sec_start = s.index('<section', bc_idx)
    sec_end = s.index('</section>', sec_start) + len('</section>')
    hero = s[sec_start:sec_end]
    rest = s

    # add bg + text color to the section's className (first occurrence in hero)
    hero_new = re.sub(
        r'(<section className=")',
        r'\1bg-teal-900 text-white ',
        hero,
        count=1,
    )

    hero_new = hero_new.replace('text-slate-900', 'text-white')
    hero_new = hero_new.replace('text-stone-600', 'text-slate-300')
    hero_new = hero_new.replace('text-stone-500', 'text-slate-300')
    hero_new = hero_new.replace('text-teal-800', 'text-amber-400')
    hero_new = hero_new.replace('border-stone-300', 'border-white/30')
    hero_new = hero_new.replace('hover:border-teal-800', 'hover:border-emerald-400')
    hero_new = hero_new.replace('hover:text-teal-800', 'hover:text-emerald-400')
    hero_new = hero_new.replace(CTA_OLD, CTA_NEW)
    hero_new = hero_new.replace(CTA_OLD_SM, CTA_NEW_SM)
    # avatar/icon circles that were bg-white inside hero (rare) -> keep bg-white/10 for contrast
    hero_new = hero_new.replace('border border-teal-100 bg-white shadow-sm', 'border border-white/20 bg-white/5 shadow-sm')

    out = s[:sec_start] + hero_new + s[sec_end:]
    open(path, "w", encoding="utf-8").write(out)
    print("updated", slug)
