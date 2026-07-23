import re, os, json

SRC = "/home/claude/site"
APP = "/home/claude/drharishgowda-site/app"

PAGES = [
    ("index.html", None),  # home -> app/page.tsx
    ("about.html", "about"),
    ("procedures.html", "procedures"),
    ("piles-surgery.html", "piles-surgery"),
    ("hernia-repair.html", "hernia-repair"),
    ("gallbladder-removal.html", "gallbladder-removal"),
    ("fissure-treatment.html", "fissure-treatment"),
    ("fistula-surgery.html", "fistula-surgery"),
    ("appendix-surgery.html", "appendix-surgery"),
    ("varicose-veins.html", "varicose-veins"),
    ("achievements.html", "achievements"),
    ("patient-stories.html", "patient-stories"),
    ("blog.html", "blog"),
    ("patient-resources.html", "patient-resources"),
    ("online-consultation.html", "online-consultation"),
    ("book-appointment.html", "book-appointment"),
    ("contact.html", "contact"),
    ("privacy-policy.html", "privacy-policy"),
]

def jsxify(html):
    html = html.replace('class="', 'className="')
    html = html.replace('stroke-width="', 'strokeWidth="')
    return html

def get_meta(s, name):
    m = re.search(r'<meta name="%s" content="([^"]*)"' % re.escape(name), s)
    return m.group(1) if m else None

def get_title(s):
    m = re.search(r'<title>(.*?)</title>', s, re.S)
    return m.group(1) if m else ""

def get_jsonld(s):
    return re.findall(r'<script type="application/ld\+json">(.*?)</script>', s, re.S)

def get_body_content(s):
    # content between </header> and <footer
    start = s.index('</header>') + len('</header>')
    end = s.index('<footer')
    return s[start:end].strip()

def fix_links(html):
    html = html.replace('href="/index.html"', 'href="/"')
    html = re.sub(r'href="/([a-z0-9\-]+)\.html"', r'href="/\1"', html)
    return html

os.makedirs(APP, exist_ok=True)

for fname, slug in PAGES:
    path = os.path.join(SRC, fname)
    s = open(path, encoding='utf-8').read()
    title = get_title(s)
    desc = get_meta(s, "description") or ""
    jsonlds = get_jsonld(s)
    body = get_body_content(s)
    body = fix_links(body)
    body = jsxify(body)

    jsonld_jsx = ""
    for i, jl in enumerate(jsonlds):
        jsonld_jsx += (
            '      <script\n'
            '        type="application/ld+json"\n'
            f'        dangerouslySetInnerHTML={{{{ __html: {json.dumps(jl.strip())} }}}}\n'
            '      />\n'
        )

    route_path = "/" if slug is None else f"/{slug}"
    canonical = f"https://drharishgowda.in{route_path}"

    page_tsx = f'''import type {{ Metadata }} from "next";

export const metadata: Metadata = {{
  title: {json.dumps(title)},
  description: {json.dumps(desc)},
  alternates: {{ canonical: {json.dumps(canonical)} }},
  openGraph: {{
    title: {json.dumps(title)},
    description: {json.dumps(desc)},
    url: {json.dumps(canonical)},
    type: "website",
  }},
}};

export default function Page() {{
  return (
    <>
{jsonld_jsx}      {body}
    </>
  );
}}
'''
    if slug is None:
        outdir = APP
    else:
        outdir = os.path.join(APP, slug)
    os.makedirs(outdir, exist_ok=True)
    with open(os.path.join(outdir, "page.tsx"), "w", encoding="utf-8") as f:
        f.write(page_tsx)
    print("wrote", os.path.join(outdir, "page.tsx"))
