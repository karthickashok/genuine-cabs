import { IconRoute, IconPlane, IconClock, IconCity, IconCar } from './Icons'

const services = [
  {
    icon: IconCity,
    title: 'Local rides',
    desc: 'Point-to-point trips within the city, billed on the meter — no negotiation needed.',
  },
  {
    icon: IconRoute,
    title: 'Outstation',
    desc: 'One-way or round trips to nearby cities and hill stations, with a driver who knows the route.',
  },
  {
    icon: IconPlane,
    title: 'Airport transfer',
    desc: 'Flight-tracked pickups and drops, timed so you are never left waiting at the terminal.',
  },
  {
    icon: IconClock,
    title: 'Car with a driver',
    desc: 'Keep a car and professional driver on call by the hour or for the whole day.',
  },
  {
    icon: IconCar,
    title: 'Self-drive rentals',
    desc: 'Pick a car, take the keys and explore at your own pace with a convenient rental.',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow-note">What we drive</span>
          <h2>Rides and rentals, all in one place.</h2>
        </div>

        <div className="services__list">
          {services.map(({ icon: Icon, title, desc }) => (
            <div className="service-item" key={title}>
              <div className="service-item__mark"><Icon /></div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
