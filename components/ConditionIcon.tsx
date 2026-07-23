type ConditionKey =
  | "piles"
  | "hernia"
  | "gallbladder"
  | "fissure"
  | "fistula"
  | "appendix"
  | "varicose-veins";

const BADGE_STYLES: Record<ConditionKey, { bg: string; stroke: string }> = {
  piles: { bg: "bg-teal-50", stroke: "#1b3f56" },
  hernia: { bg: "bg-emerald-50", stroke: "#047857" },
  gallbladder: { bg: "bg-amber-50", stroke: "#a3661f" },
  fissure: { bg: "bg-teal-50", stroke: "#1b3f56" },
  fistula: { bg: "bg-emerald-50", stroke: "#047857" },
  appendix: { bg: "bg-amber-50", stroke: "#a3661f" },
  "varicose-veins": { bg: "bg-teal-50", stroke: "#1b3f56" },
};

function IconPaths({ name, stroke }: { name: ConditionKey; stroke: string }) {
  const common = {
    fill: "none",
    stroke,
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "piles":
      // comfort / relief cushion
      return (
        <g {...common}>
          <path d="M7 15c0-3 2-5 5-5s5 2 5 5" />
          <path d="M4 15h16" />
          <path d="M6 15v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2" />
          <circle cx="12" cy="9" r="1.4" fill={stroke} stroke="none" />
        </g>
      );
    case "hernia":
      // shield / repair
      return (
        <g {...common}>
          <path d="M12 3l7 3v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6z" />
          <path d="M9 12h6" />
          <path d="M12 9v6" />
        </g>
      );
    case "gallbladder":
      // organ droplet
      return (
        <g {...common}>
          <path d="M12 3c3 4 5 6.8 5 9.5a5 5 0 0 1-10 0C7 9.8 9 7 12 3z" />
          <path d="M9.5 13.5c.6 1 1.5 1.5 2.5 1.5s1.9-.5 2.5-1.5" />
        </g>
      );
    case "fissure":
      // healing bandage
      return (
        <g {...common}>
          <rect x="4" y="9" width="16" height="6" rx="3" />
          <path d="M10 9v6" />
          <path d="M14 9v6" />
        </g>
      );
    case "fistula":
      // abnormal connection between two points
      return (
        <g {...common}>
          <circle cx="7" cy="8" r="2.4" />
          <circle cx="17" cy="16" r="2.4" />
          <path d="M9 9.6c3 1 5 3.8 5.6 6" />
        </g>
      );
    case "appendix":
      // small pouch off main tract
      return (
        <g {...common}>
          <path d="M5 6c0 5 2 8 6 9" />
          <path d="M11 15c2.2 0 4-.4 5.4-1.6a2.2 2.2 0 0 0 0-3.4C15.4 9 13.6 8.6 11.4 8.8" />
          <circle cx="16.8" cy="11.6" r="1" fill={stroke} stroke="none" />
        </g>
      );
    case "varicose-veins":
      // leg with vein pattern
      return (
        <g {...common}>
          <path d="M9 3v9c0 3 1.5 5 1.5 8" />
          <path d="M15 3v7c0 3-1.5 5-1.5 9" />
          <path d="M9.5 9c2 .8 3.5.8 5.5 0" />
          <path d="M9.7 14c2 .8 3.5.8 5.3 0" />
        </g>
      );
  }
}

export default function ConditionIcon({ name }: { name: ConditionKey }) {
  const style = BADGE_STYLES[name];
  return (
    <div
      className={`flex h-11 w-11 items-center justify-center rounded-lg ring-1 ring-inset ring-black/5 ${style.bg}`}
    >
      <svg width="22" height="22" viewBox="0 0 24 24">
        <IconPaths name={name} stroke={style.stroke} />
      </svg>
    </div>
  );
}
