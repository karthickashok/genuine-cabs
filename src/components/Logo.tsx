type LogoProps = {
  variant?: 'default' | 'light'
  showWordmark?: boolean
}

export default function Logo({ variant = 'default', showWordmark = true }: LogoProps) {
  const wordColor = variant === 'light' ? '#faf7f2' : '#0f1e3d'

  return (
    <span className="brand">
      <svg width="38" height="38" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="32" cy="32" r="31" fill="#0f1e3d" />
        <circle cx="32" cy="32" r="31" fill="none" stroke="#f2a93b" strokeWidth="1.5" />
        <path
          d="M14 37.5 L17.5 27 C18.2 25 20 23.7 22.1 23.7 H41.9 C44 23.7 45.8 25 46.5 27 L50 37.5"
          fill="none" stroke="#f7f5f0" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"
        />
        <path
          d="M12.5 37.5 H51.5 C51.5 39.7 49.7 41.5 47.5 41.5 H16.5 C14.3 41.5 12.5 39.7 12.5 37.5 Z"
          fill="#f7f5f0"
        />
        <circle cx="21" cy="41.5" r="4.4" fill="#0f1e3d" stroke="#f7f5f0" strokeWidth="2" />
        <circle cx="43" cy="41.5" r="4.4" fill="#0f1e3d" stroke="#f7f5f0" strokeWidth="2" />
        <rect x="21" y="29.5" width="22" height="2" rx="1" fill="#0f1e3d" />
        <circle cx="47" cy="47" r="10" fill="#f2a93b" />
        <path d="M42.3 47.2 L45.6 50.4 L52 43.6" fill="none" stroke="#0f1e3d" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {showWordmark && (
        <span className="brand__word" style={{ color: wordColor }}>
          Genuine
          <span>Cabs</span>
        </span>
      )}
    </span>
  )
}
