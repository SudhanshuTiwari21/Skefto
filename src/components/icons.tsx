import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

/* ----- individual icons (line / stroke style) ----- */

const register = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 3v18" />
    <path d="M11.5 8h5M11.5 12h5M11.5 16h3" />
  </svg>
);

const calendar = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="4.5" width="18" height="16" rx="2" />
    <path d="M3 9h18M8 2.5v4M16 2.5v4" />
    <path d="M7.5 13.5l1.5 1.5 2.5-3" />
  </svg>
);

const document = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 2.5h7l5 5V21a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1Z" />
    <path d="M13 2.5V8h5" />
    <path d="M8.5 13h7M8.5 16.5h7" />
  </svg>
);

const audit = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m20 20-3.6-3.6" />
    <path d="m8.5 11 1.7 1.7L14 9" />
  </svg>
);

const workflow = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="6" height="6" rx="1.5" />
    <rect x="15" y="15" width="6" height="6" rx="1.5" />
    <path d="M9 6h4a3 3 0 0 1 3 3v6" />
    <path d="m13.5 12.5 2.5 2.5 2.5-2.5" />
  </svg>
);

const chart = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 4v15a1 1 0 0 0 1 1h15" />
    <path d="M8 15l3.5-4 3 2.5L20 7" />
  </svg>
);

const refresh = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3.5 9a8 8 0 0 1 13.5-3l2.5 2.4" />
    <path d="M20.5 15a8 8 0 0 1-13.5 3L4.5 15.6" />
    <path d="M19.5 3v5h-5M4.5 21v-5h5" />
  </svg>
);

const map = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6 9 4Z" />
    <path d="M9 4v14M15 6v14" />
  </svg>
);

const signature = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 17c2.5 0 3-9 4.5-9S9 16 10.5 16 12 9 13.5 9 15 14 16.5 14c1.2 0 1.8-2 2.5-2" />
    <path d="M3 20.5h18" />
  </svg>
);

const shield = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 2.5 5 5.2v6.3c0 4.4 3 7.6 7 9.5 4-1.9 7-5.1 7-9.5V5.2L12 2.5Z" />
    <path d="m9 11.7 2 2 4-4.2" />
  </svg>
);

const incident = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3 2.5 20h19L12 3Z" />
    <path d="M12 10v4.5M12 17.4h.01" />
  </svg>
);

const safety = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 10a7 7 0 0 1 14 0v3h1.5v3.5h-17V13H5v-3Z" />
    <path d="M9 6.2A6.9 6.9 0 0 1 12 5.5" />
    <path d="M3.5 20.5h17" />
  </svg>
);

const target = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const risk = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3.2 3.5 7.5v5c0 5 3.6 8 8.5 9.3 4.9-1.3 8.5-4.3 8.5-9.3v-5L12 3.2Z" />
    <path d="M12 8v4.5M12 16h.01" />
  </svg>
);

const building = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 21V6l8-3.5L20 6v15" />
    <path d="M3 21h18" />
    <path d="M9 9h.01M15 9h.01M9 13h.01M15 13h.01M9 17h.01M15 17h.01" />
  </svg>
);

const heart = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 20s-7-4.3-9.2-9A4.6 4.6 0 0 1 12 6.8 4.6 4.6 0 0 1 21.2 11C19 15.7 12 20 12 20Z" />
    <path d="M8.5 11h2l1-2 1.5 4 1-2h2" />
  </svg>
);

const cap = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 4 2.5 8.5 12 13l9.5-4.5L12 4Z" />
    <path d="M6.5 10.5V15c0 1.4 2.5 2.8 5.5 2.8s5.5-1.4 5.5-2.8v-4.5" />
    <path d="M21.5 8.5v5" />
  </svg>
);

const gov = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3.5 9 12 3.5 20.5 9" />
    <path d="M4.5 9h15v1.5h-15z" />
    <path d="M6 10.5v7M10 10.5v7M14 10.5v7M18 10.5v7" />
    <path d="M3.5 20.5h17" />
  </svg>
);

const lock = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="4.5" y="10" width="15" height="11" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    <path d="M12 14.5v2.5" />
  </svg>
);

const globe = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17M12 3.5c2.5 2.4 2.5 14.6 0 17M12 3.5c-2.5 2.4-2.5 14.6 0 17" />
  </svg>
);

const sliders = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 4v6M5 14v6M12 4v3M12 11v9M19 4v9M19 17v3" />
    <circle cx="5" cy="12" r="2" />
    <circle cx="12" cy="9" r="2" />
    <circle cx="19" cy="15" r="2" />
  </svg>
);

const users = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
    <path d="M16 5.2a3.2 3.2 0 0 1 0 5.6M17.5 14.5a5.5 5.5 0 0 1 3 5" />
  </svg>
);

const sparkles = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" />
    <path d="M18.5 14.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z" />
  </svg>
);

/* ----- simple inline glyphs ----- */

const check = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={2.2}>
    <path d="m5 12.5 4.5 4.5L19 6.5" />
  </svg>
);

const arrow = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={2}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

const bolt = (p: IconProps) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M13 2 4 13.5h6L9 22l9-11.5h-6L13 2Z" />
  </svg>
);

const play = (p: IconProps) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M8 5.5v13l11-6.5L8 5.5Z" />
  </svg>
);

const spark = (p: IconProps) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="m12 2 2.9 6.3L22 9.3l-5 4.8 1.2 6.9L12 17.8 5.8 21l1.2-6.9-5-4.8 7.1-1L12 2Z" />
  </svg>
);

export const Icon = {
  register,
  calendar,
  document,
  audit,
  workflow,
  chart,
  refresh,
  map,
  signature,
  shield,
  incident,
  safety,
  target,
  risk,
  building,
  heart,
  cap,
  gov,
  lock,
  globe,
  sliders,
  users,
  sparkles,
  check,
  arrow,
  bolt,
  play,
  spark,
};

export type IconName = keyof typeof Icon;
