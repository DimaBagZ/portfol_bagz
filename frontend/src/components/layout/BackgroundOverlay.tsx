"use client";

/** Инлайн SVG: анимация CSS не работает, если грузить файл через <img>. */
const BackgroundOverlay = () => (
  <svg
    className="site-background__overlay"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 900"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <g className="site-bg-layer site-bg-layer--a">
      <path className="site-bg-line" d="M120 180 L280 140 L420 220 L560 160" />
      <circle className="site-bg-node" cx="120" cy="180" r="2.5" />
      <circle className="site-bg-node" cx="280" cy="140" r="2" />
      <circle className="site-bg-node" cx="420" cy="220" r="2.5" />
      <circle className="site-bg-node" cx="560" cy="160" r="2" />
    </g>

    <g className="site-bg-layer site-bg-layer--b">
      <path className="site-bg-line" d="M980 120 L1120 200 L1280 150 L1360 260" />
      <circle className="site-bg-node" cx="980" cy="120" r="2" />
      <circle className="site-bg-node" cx="1120" cy="200" r="2.5" />
      <circle className="site-bg-node" cx="1280" cy="150" r="2" />
      <circle className="site-bg-node" cx="1360" cy="260" r="2.5" />
    </g>

    <g className="site-bg-layer site-bg-layer--c">
      <path className="site-bg-line" d="M200 720 L360 640 L520 700 L700 620" />
      <circle className="site-bg-node" cx="200" cy="720" r="2" />
      <circle className="site-bg-node" cx="360" cy="640" r="2.5" />
      <circle className="site-bg-node" cx="520" cy="700" r="2" />
      <circle className="site-bg-node" cx="700" cy="620" r="2" />
    </g>

    <g className="site-bg-layer site-bg-layer--b site-bg-hex">
      <polygon
        className="site-bg-line"
        points="1180,680 1220,700 1220,740 1180,760 1140,740 1140,700"
      />
      <polygon
        className="site-bg-line"
        points="160,420 190,435 190,465 160,480 130,465 130,435"
      />
    </g>
  </svg>
);

export default BackgroundOverlay;
