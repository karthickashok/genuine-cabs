import { site } from '../data/site'

const points = [
  {
    num: '01',
    title: 'Verified, background-checked drivers',
    desc: 'Every driver is licensed, ID-verified and trained before their first trip with us.',
  },
  {
    num: '02',
    title: 'Upfront, metered pricing',
    desc: 'The fare you see is the fare you pay — no surge multipliers, no last-minute add-ons.',
  },
  {
    num: '03',
    title: 'Clean cars, every trip',
    desc: 'Vehicles are sanitised and inspected between rides, not just when they look dirty.',
  },
  {
    num: '04',
    title: 'Support you can actually reach',
    desc: 'A phone line and WhatsApp desk staffed daily — not a bot that loops your question back.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="why-us" id="why-us">
      <div className="wrap why-us__grid">
        <div>
          <span className="eyebrow-note">Why riders stay</span>
          <h2 style={{ marginTop: 10, marginBottom: 24, fontSize: 'clamp(1.7rem, 2.6vw, 2.2rem)' }}>
            Built on the trips people rebook.
          </h2>
          <div className="why-us__points">
            {points.map((p) => (
              <div className="why-point" key={p.num}>
                <span className="why-point__num">{p.num}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="route-panel">
          <h3>Where we currently operate</h3>
          <ul className="route-panel__cities">
            {site.serviceCities.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
