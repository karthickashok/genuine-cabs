import Logo from './Logo'
import { site } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__brand">
            <Logo variant="light" />
            <p>
              Chauffeur-driven rides and self-drive car rentals for local trips, airport transfers
              and outstation journeys, based in {site.baseCity}.
            </p>
          </div>

          <div className="footer__col">
            <h4>Company</h4>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#fleet">Fleet</a></li>
              <li><a href="#why-us">Why us</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              <li>Local rides</li>
              <li>Outstation</li>
              <li>Airport transfer</li>
              <li>Hourly car with driver</li>
              <li>Self-drive car rentals</li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Get in touch</h4>
            <ul>
              <li><a href={site.phoneHref}>{site.phoneDisplay}</a></li>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li>{site.baseCity}</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} {site.name}. All rights reserved.</span>
          <span>Built for journeys on your terms.</span>
        </div>
      </div>
    </footer>
  )
}
