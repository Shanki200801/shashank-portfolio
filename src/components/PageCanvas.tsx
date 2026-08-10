/**
 * Fixed decorative backdrop: faint grid plus three drifting aurora blobs.
 * Purely presentational and pointer-events-none, so it never blocks the page.
 */
const PageCanvas = () => (
  <div className="page-canvas" aria-hidden="true">
    <div
      className="aurora animate-float"
      style={{
        top: "-8rem",
        left: "-6rem",
        width: "34rem",
        height: "34rem",
        background: "var(--glow-a)",
      }}
    />
    <div
      className="aurora animate-float"
      style={{
        top: "12%",
        right: "-10rem",
        width: "30rem",
        height: "30rem",
        background: "var(--glow-b)",
        animationDelay: "-4s",
      }}
    />
    <div
      className="aurora animate-float"
      style={{
        bottom: "-12rem",
        left: "35%",
        width: "28rem",
        height: "28rem",
        background: "rgb(45 212 191 / 0.14)",
        animationDelay: "-7s",
      }}
    />
  </div>
);

export default PageCanvas;
