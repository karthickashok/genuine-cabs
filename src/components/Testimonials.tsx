const testimonials = [
  {
    quote: 'Booked an outstation trip to Pondicherry at midnight and the driver was on time to the minute. No surprises on the fare either.',
    who: 'Divya R.',
    detail: 'Chennai → Pondicherry',
  },
  {
    quote: 'I use them for airport drops every month for work. The driver always tracks the flight, so pickups are never awkward.',
    who: 'Arun K.',
    detail: 'Monthly airport transfers',
  },
  {
    quote: 'Needed a car for six hours for a client visit. The hourly rental worked out cheaper than two separate one-way trips.',
    who: 'Meena S.',
    detail: 'Hourly rental, Bengaluru',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow-note">Riders say</span>
          <h2>Trusted for the trips that matter.</h2>
        </div>

        <div className="testimonial__grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.who}>
              <p className="quote">&ldquo;{t.quote}&rdquo;</p>
              <p className="testimonial-card__who">
                <strong>{t.who}</strong>
                {t.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
