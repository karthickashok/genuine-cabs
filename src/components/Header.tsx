import { useState } from 'react'
import Logo from './Logo'
import { site } from '../data/site'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#fleet', label: 'Fleet' },
  { href: '#why-us', label: 'Why us' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-header__bar">
        <a href="#top" aria-label={`${site.name} home`}>
          <Logo />
        </a>

        <nav className="site-nav" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="header__actions">
          <div className="header__phone">
            <span>Book by phone</span>
            <strong>{site.phoneDisplay}</strong>
          </div>
          <a href="#book" className="btn btn-primary">Book now</a>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {open && (
        <nav className="wrap" style={{ paddingBottom: 18, display: 'flex', flexDirection: 'column', gap: 14 }} aria-label="Mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href={site.phoneHref}>{site.phoneDisplay}</a>
        </nav>
      )}
    </header>
  )
}
