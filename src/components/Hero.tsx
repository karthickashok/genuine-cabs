import BookingForm from './BookingForm'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <svg className="hero__route" viewBox="0 0 1160 520" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M -40 470 C 220 470, 260 300, 480 300 S 700 120, 980 120 S 1180 40, 1260 40"
          fill="none"
          stroke="#1c3363"
          strokeOpacity="0.16"
          strokeWidth="2"
          strokeDasharray="2 12"
          strokeLinecap="round"
        />
        <circle cx="-40" cy="470" r="5" fill="#0f1e3d" opacity="0.25" />
        <circle cx="980" cy="120" r="5" fill="#f2a93b" />
      </svg>

      <div className="wrap hero__grid">
        <div>
          <span className="hero__eyebrow"><span className="dot" />Serving All over India since 2026</span>
          <h1>Your journey, your way.</h1>
          <p className="hero__lede">
            Choose a chauffeur-driven cab or rent a car to drive yourself. From local trips and
            airport transfers to outstation journeys, get a clean, reliable ride on your terms.
          </p>
          <div className="hero__cta-row">
            <a href="#book" className="btn btn-primary">Book or rent a car</a>
            <a href="#fleet" className="btn btn-outline">Explore our fleet</a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat"><b>1+</b><span>years on the road</span></div>
            <div className="hero__stat"><b>10</b><span>trips completed</span></div>
            <div className="hero__stat"><b>All</b><span>cities covered</span></div>
            <div className="hero__stat"><b>4.8/5</b><span>average rating</span></div>
          </div>
        </div>

        <BookingForm />
      </div>
    </section>
  )
}
