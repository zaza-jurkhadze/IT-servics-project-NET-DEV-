export default function HeroSketch() {
  return (
    <svg
      className="hero-diagram hero-diagram--sketch"
      viewBox="0 0 480 405"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g
        className="sketch-cloud"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M 120 95 Q 95 95 95 118 Q 95 142 125 145 L 335 145 Q 365 142 365 115 Q 365 88 338 88 Q 328 62 295 62 Q 270 48 240 58 Q 210 45 180 62 Q 148 55 130 78 Q 118 78 120 95 Z" />
        <path d="M 210 78 Q 240 68 268 78" opacity="0.55" />
      </g>
      <text className="sketch-label" x="240" y="118" textAnchor="middle">
        WAN / CLOUD
      </text>
      <line className="sketch-link" x1="240" y1="148" x2="240" y2="188" />
      <text
        className="sketch-label sketch-label--small"
        x="240"
        y="168"
        textAnchor="middle"
      >
        CORE
      </text>
      <circle className="sketch-hub-ring" cx="240" cy="208" r="36" />
      <circle className="sketch-hub-core" cx="240" cy="208" r="14" />
      <line className="sketch-link" x1="240" y1="244" x2="240" y2="268" />
      <line className="sketch-link" x1="240" y1="208" x2="108" y2="268" />
      <line className="sketch-link" x1="240" y1="208" x2="372" y2="268" />
      <g
        className="sketch-rack"
        transform="translate(188 268)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="0" y="0" width="104" height="118" rx="8" />
        <line x1="12" y1="22" x2="92" y2="22" />
        <line x1="12" y1="42" x2="92" y2="42" />
        <line x1="12" y1="62" x2="92" y2="62" />
        <line x1="12" y1="82" x2="92" y2="82" />
        <circle cx="24" cy="32" r="3" className="sketch-dot" />
        <circle cx="24" cy="52" r="3" className="sketch-dot" />
        <circle cx="24" cy="72" r="3" className="sketch-dot" />
        <rect
          x="34"
          y="26"
          width="48"
          height="8"
          rx="2"
          className="sketch-slot"
        />
        <rect
          x="34"
          y="46"
          width="40"
          height="8"
          rx="2"
          className="sketch-slot"
        />
        <rect
          x="34"
          y="66"
          width="52"
          height="8"
          rx="2"
          className="sketch-slot"
        />
      </g>
      <text className="sketch-label" x="240" y="398" textAnchor="middle">
        SERVER / VM
      </text>
      <g
        className="sketch-fw"
        transform="translate(40 278)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="0" y="0" width="88" height="72" rx="6" />
        <path d="M 12 20 L 76 20 M 12 36 L 60 36 M 12 52 L 70 52" opacity="0.7" />
        <polyline
          points="44,14 50,20 44,26"
          className="sketch-accent-stroke"
        />
      </g>
      <text
        className="sketch-label sketch-label--small"
        x="84"
        y="366"
        textAnchor="middle"
      >
        FW
      </text>
      <g
        className="sketch-sec"
        transform="translate(352 278)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="0" y="0" width="88" height="72" rx="6" />
        <path
          d="M 44 12 L 62 22 V 42 Q 44 58 26 42 V 22 Z"
          className="sketch-accent-stroke"
        />
        <path d="M 44 28 L 44 48 M 36 38 L 52 38" opacity="0.6" />
      </g>
      <text
        className="sketch-label sketch-label--small"
        x="396"
        y="366"
        textAnchor="middle"
      >
        SEC
      </text>
    </svg>
  );
}
