export default function Home() {
  return (
    <main style={{ background: "#0a0a0a", color: "white" }}>
      <section style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "4rem", letterSpacing: "2px" }}>
          SHOTSBYNATE
        </h1>
        <p style={{ opacity: 0.7, marginTop: "10px" }}>
          cinematic photography
        </p>
      </section>

      <section style={{ height: "100vh", padding: "80px" }}>
        <h2>Portfolio</h2>
        <p>Scroll-based gallery coming next</p>
      </section>

      <section style={{ height: "100vh", padding: "80px" }}>
        <h2>Book a Session</h2>
        <p>Contact + booking system coming next</p>
      </section>
    </main>
  );
}
