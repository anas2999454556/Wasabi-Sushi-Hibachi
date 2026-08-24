import './About.css'

export default function About() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        <div className="about-copy">
          <p className="about-lead">
            We don't cut corners. We cut fish.
          </p>
          <p>
            Wasabi Sushi & Hibachi was built on a simple idea: serve sushi and hibachi
            the way they're meant to be done. Fresh fish, proper technique, no shortcuts.
            Our chefs train for years before they touch a knife in front of guests.
          </p>
          <p>
            The hibachi grill runs hot and fast. The sushi bar moves slow and precise.
            Two different paces, one standard: everything on the plate earns its place.
          </p>
          <div className="source-list">
            <div className="source-row">
              <span className="name">Bluefin tuna, akami &amp; chutoro</span>
              <span className="place">Atlantic &amp; Pacific</span>
            </div>
            <div className="source-row">
              <span className="name">Hamachi (yellowtail)</span>
              <span className="place">Line-caught,东海</span>
            </div>
            <div className="source-row">
              <span className="name">Sushi-grade rice</span>
              <span className="place">Calrose, short-grain</span>
            </div>
            <div className="source-row">
              <span className="name">Nori</span>
              <span className="place">Ariake Sea</span>
            </div>
          </div>
        </div>
        <div className="about-card">
          <div className="about-card-label">Today&apos;s selection</div>
          <h3>Salmon aburi, torched</h3>
          <p className="about-card-meta">
            Norwegian Atlantic salmon, lightly seared with a blowtorch,
            finished with yuzu and a touch of sea salt.
          </p>
          <div className="temp-line">
            <span>4&deg;C hold</span>
            <div className="temp-bar" />
            <span>served 21&deg;C</span>
          </div>
        </div>
      </div>
    </section>
  )
}
