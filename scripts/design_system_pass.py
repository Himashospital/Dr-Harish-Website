import re

FILES = [
    "about", "procedures", "achievements", "patient-stories", "blog",
    "patient-resources", "online-consultation", "contact", "book-appointment",
    "privacy-policy", "piles-surgery", "hernia-repair", "gallbladder-removal",
    "fissure-treatment", "fistula-surgery", "appendix-surgery", "varicose-veins",
]

SECTION_RE = re.compile(r'<section className="([^"]*)">(.*?)</section>', re.S)

def ensure_import(src, import_line):
    if import_line in src:
        return src
    return src.replace(
        'import type { Metadata } from "next";',
        f'import type {{ Metadata }} from "next";\n{import_line}',
        1,
    )

for slug in FILES:
    path = f"/home/claude/drharishgowda-site/app/{slug}/page.tsx"
    src = open(path, encoding="utf-8").read()

    needs_reveal = False
    needs_glow = False

    sections = list(SECTION_RE.finditer(src))
    if not sections:
        print("NO SECTIONS", slug)
        continue

    out = src
    offset = 0
    for i, m in enumerate(sections):
        cls, inner = m.group(1), m.group(2)
        start, end = m.start() + offset, m.end() + offset
        is_hero = "bg-teal-900" in cls
        already_reveal = "<Reveal" in inner

        if is_hero and not already_reveal:
            new_cls = cls.replace(
                "bg-teal-900",
                "relative overflow-hidden bg-gradient-to-br from-teal-900 via-teal-900 to-slate-900",
            )
            new_block = (
                f'<section className="{new_cls}">\n'
                f'  <SectionGlow />\n'
                f'  <Reveal className="relative">{inner}</Reveal>\n'
                f'</section>'
            )
            needs_glow = True
            needs_reveal = True
        elif not is_hero and not already_reveal:
            new_block = (
                f'<section className="{cls}">\n'
                f'  <Reveal>{inner}</Reveal>\n'
                f'</section>'
            )
            needs_reveal = True
        else:
            new_block = m.group(0)

        out = out[:start] + new_block + out[start + (end - start):] if False else out
        # simpler: rebuild via direct string replace since section text is unique per file mostly
    # Do the actual replacement pass using re.sub with a callback (safe, single pass)
    def repl(m):
        cls, inner = m.group(1), m.group(2)
        is_hero = "bg-teal-900" in cls
        already_reveal = "<Reveal" in inner
        if is_hero and not already_reveal:
            new_cls = cls.replace(
                "bg-teal-900",
                "relative overflow-hidden bg-gradient-to-br from-teal-900 via-teal-900 to-slate-900",
            )
            return (
                f'<section className="{new_cls}">\n'
                f'  <SectionGlow />\n'
                f'  <Reveal className="relative">{inner}</Reveal>\n'
                f'</section>'
            )
        elif not is_hero and not already_reveal:
            return (
                f'<section className="{cls}">\n'
                f'  <Reveal>{inner}</Reveal>\n'
                f'</section>'
            )
        return m.group(0)

    new_src = SECTION_RE.sub(repl, src)

    if "<Reveal" in new_src and 'import Reveal from "@/components/Reveal";' not in new_src:
        new_src = ensure_import(new_src, 'import Reveal from "@/components/Reveal";')
    if "<SectionGlow" in new_src and 'import SectionGlow from "@/components/SectionGlow";' not in new_src:
        new_src = ensure_import(new_src, 'import SectionGlow from "@/components/SectionGlow";')

    open(path, "w", encoding="utf-8").write(new_src)
    print("updated", slug)
