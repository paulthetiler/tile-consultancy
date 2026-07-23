/**
 * A technical section drawn to the annotation grammar: hairline construction,
 * an in-plate scale bar and calibration wedge, corner registration marks, and
 * the single signal red reserved for the measured value and the out-of-tolerance
 * flag. Stands in for a real forensic photograph until the shoot (Milestone 4).
 */
export function SpecimenFigure() {
  return (
    <svg
      viewBox="0 0 560 300"
      className="block h-auto w-full min-w-[420px] font-mono"
      role="img"
      aria-label="Technical section: lippage of 2.4 mm at a tile threshold, exceeding the BS 5385-3 tolerance of 1.0 mm — non-conforming."
    >
      {/* corner registration marks */}
      <g className="stroke-ink-40" strokeWidth="1">
        <line x1="12" y1="12" x2="30" y2="12" />
        <line x1="12" y1="12" x2="12" y2="30" />
        <line x1="548" y1="12" x2="530" y2="12" />
        <line x1="548" y1="12" x2="548" y2="30" />
        <line x1="12" y1="288" x2="30" y2="288" />
        <line x1="12" y1="288" x2="12" y2="270" />
        <line x1="548" y1="288" x2="530" y2="288" />
        <line x1="548" y1="288" x2="548" y2="270" />
      </g>

      <rect x="40" y="210" width="480" height="42" className="fill-hairline-2 stroke-ink" strokeWidth="1" />
      <text x="48" y="235" className="fill-ink-70" fontSize="12">SCREED / SUBSTRATE</text>

      <rect x="40" y="196" width="480" height="14" className="stroke-ink-40" fill="none" strokeDasharray="2 3" strokeWidth="1" />

      <rect x="60" y="150" width="210" height="46" className="fill-paper stroke-ink" strokeWidth="1.5" />
      <text x="150" y="178" className="fill-ink-70" fontSize="12" textAnchor="middle">TILE A · datum</text>

      <rect x="290" y="138" width="210" height="46" className="fill-paper stroke-ink" strokeWidth="1.5" />
      <text x="395" y="166" className="fill-ink-70" fontSize="12" textAnchor="middle">TILE B · +2.4</text>

      <rect x="270" y="138" width="20" height="58" className="stroke-ink-40" fill="none" strokeWidth="1" />

      <line x1="60" y1="150" x2="540" y2="150" className="stroke-ink-40" strokeWidth="1" strokeDasharray="3 3" />
      <text x="524" y="146" className="fill-ink-70" fontSize="12" textAnchor="end">DATUM 0.0</text>

      {/* lippage dimension — the finding, in signal red */}
      <line x1="512" y1="138" x2="512" y2="150" className="stroke-signal" strokeWidth="1.5" />
      <line x1="506" y1="138" x2="518" y2="138" className="stroke-signal" strokeWidth="1.5" />
      <line x1="506" y1="150" x2="518" y2="150" className="stroke-signal" strokeWidth="1.5" />
      <circle cx="512" cy="138" r="2.5" className="fill-signal" />
      <text x="500" y="130" className="fill-signal" fontSize="12" textAnchor="end">Δ 2.4 mm</text>

      {/* graphic scale bar */}
      <g className="stroke-ink-40" strokeWidth="1">
        <line x1="40" y1="278" x2="180" y2="278" />
        <line x1="40" y1="274" x2="40" y2="282" />
        <line x1="110" y1="275" x2="110" y2="281" />
        <line x1="180" y1="274" x2="180" y2="282" />
      </g>
      <text x="40" y="294" className="fill-ink-70" fontSize="10">0</text>
      <text x="180" y="294" className="fill-ink-70" fontSize="10" textAnchor="end">50 mm</text>

      {/* in-plate calibration wedge */}
      <g>
        <rect x="360" y="272" width="160" height="12" fill="none" className="stroke-ink-40" strokeWidth="1" />
        <rect x="360" y="272" width="26.6" height="12" fill="#ffffff" />
        <rect x="386.6" y="272" width="26.6" height="12" fill="#c8c8c8" />
        <rect x="413.2" y="272" width="26.6" height="12" fill="#909090" />
        <rect x="439.8" y="272" width="26.6" height="12" fill="#585858" />
        <rect x="466.4" y="272" width="26.6" height="12" fill="#2a2a2a" />
        <rect x="493" y="272" width="27" height="12" fill="#000000" />
      </g>

      <text x="40" y="40" className="fill-ink" fontSize="13">PLATE 01 — LIPPAGE AT THRESHOLD</text>
      <text x="40" y="60" className="fill-ink-70" fontSize="12">CERAMIC ON SCREED · WET AREA · grid B/4</text>
      <text x="40" y="86" className="fill-signal" fontSize="12">TOL. ≤ 1.0 mm — BS 5385-3</text>
      <line x1="40" y1="96" x2="200" y2="96" className="stroke-signal" strokeWidth="1" />
    </svg>
  );
}
