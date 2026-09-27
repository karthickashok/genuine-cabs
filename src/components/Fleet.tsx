import { IconCar, IconSedanPlus, IconSuv, IconVan } from './Icons'

const fleet = [
  {
    icon: IconCar,
    name: 'Hatchback',
    meta: 'Indica, Swift or similar · 4 seats',
    tags: ['City rides', 'Budget friendly'],
  },
  {
    icon: IconSedanPlus,
    name: 'Sedan',
    meta: 'Dzire, Etios or similar · 4 seats',
    tags: ['Outstation', 'Airport'],
  },
  {
    icon: IconSuv,
    name: 'SUV',
    meta: 'Ertiga, Innova or similar · 6–7 seats',
    tags: ['Group travel', 'Extra luggage'],
  },
  {
    icon: IconVan,
    name: 'Tempo traveller',
    meta: '12–17 seats',
    tags: ['Groups', 'Events'],
  },
]

export default function Fleet() {
  return (
    <section className="fleet" id="fleet">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow-note">Ride or rent</span>
          <h2>Choose a car for your trip or your rental.</h2>
        </div>

        <div className="fleet__grid">
          {fleet.map(({ icon: Icon, name, meta, tags }) => (
            <div className="fleet-card" key={name}>
              <div className="fleet-card__icon"><Icon /></div>
              <h3>{name}</h3>
              <p className="fleet-card__meta">{meta}</p>
              <ul className="fleet-card__tags">
                {tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
