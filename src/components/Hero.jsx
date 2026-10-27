import { BIZ } from "../config.js";
import Photo from "./Photo.jsx";

const BADGES = [
  ["insured", "Insured"],
  ["bonded", "Bonded"],
  ["backgroundChecked", "Background-checked"],
];

export default function Hero() {
  const badges = BADGES.filter(([key]) => BIZ.badges[key]);

  return (
    <>
      <section
        style={{
          background: "var(--color-accent)",
          color: "var(--color-bg)",
          padding: "28px 16px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <span className="eyebrow" style={{ color: "var(--color-orange)", fontWeight: 700 }}>{BIZ.area}</span>
        <h1 style={{ fontSize: 42, lineHeight: 1.05, letterSpacing: "-0.03em", color: "var(--color-bg)" }}>
          {BIZ.tagline}
        </h1>
        {badges.length > 0 && (
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              borderTop: "2px solid var(--color-bg)",
            }}
          >
            {badges.map(([key, title]) => (
              <li
                key={key}
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "baseline",
                  padding: "9px 0",
                  borderBottom: "1px solid var(--color-accent-300)",
                  fontWeight: 600,
                }}
              >
                <span aria-hidden="true" style={{ color: "var(--color-orange)" }}>✓</span>
                <span style={{ fontSize: 15 }}>{title}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
      <div style={{ height: 260, position: "relative", borderBottom: "4px solid var(--color-orange)" }}>
        <Photo src={BIZ.photos.hero} alt="A clean, bright room" placeholder="[Hero photo — a clean, bright room]" />
      </div>
    </>
  );
}
