import re

MAP = {
    "Piles": "piles",
    "Hernia": "hernia",
    "Gallbladder": "gallbladder",
    "Fissure": "fissure",
    "Fistula": "fistula",
    "Appendix": "appendix",
    "Varicose Veins": "varicose-veins",
}

FILES = [
    "/home/claude/drharishgowda-site/app/page.tsx",
    "/home/claude/drharishgowda-site/app/procedures/page.tsx",
]

for path in FILES:
    s = open(path, encoding="utf-8").read()
    for label, slug in MAP.items():
        old = f'<h3 className="font-serif text-lg font-semibold text-slate-900">{label}</h3>'
        new = f'<ConditionIcon name="{slug}" />\n              <h3 className="mt-3 font-serif text-lg font-semibold text-slate-900">{label}</h3>'
        if old not in s:
            print("MISSING", path, label)
        s = s.replace(old, new)
    # add import
    if 'ConditionIcon' not in s.split('\n')[0:5].__str__():
        pass
    if 'import ConditionIcon' not in s:
        s = s.replace(
            'import type { Metadata } from "next";',
            'import type { Metadata } from "next";\nimport ConditionIcon from "@/components/ConditionIcon";',
            1,
        )
    open(path, "w", encoding="utf-8").write(s)
    print("updated", path)
