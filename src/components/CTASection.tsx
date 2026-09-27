import { IconWhatsapp } from './Icons'
import { site } from '../data/site'

export default function CTASection() {
  return (
    <section className="cta-banner" id="contact">
      <div className="wrap cta-banner__row">
        <h2>Need a ride or a car to call your own?</h2>
        <div className="cta-banner__actions">
          <a href={site.whatsappHref} className="btn btn-primary" style={{ background: '#0f1e3d', color: '#faf7f2' }}>
            <IconWhatsapp /> Chat on WhatsApp
          </a>
          <a href={site.phoneHref} className="btn btn-outline">Call {site.phoneDisplay}</a>
        </div>
      </div>
    </section>
  )
}
