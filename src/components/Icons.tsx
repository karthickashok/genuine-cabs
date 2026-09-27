type IconProps = { size?: number }
const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export function IconRoute({ size = 26 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <circle cx="5" cy="18" r="2.2" />
      <circle cx="19" cy="6" r="2.2" />
      <path d="M6.9 16.5 C11 12 9 8 12.5 7.2 S19 6 19 6" strokeDasharray="1 3.4" />
    </svg>
  )
}

export function IconPlane({ size = 26 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M3 13.5 L21 7 L15.5 21 L12.8 14.6 L3 13.5 Z" strokeLinejoin="round" />
      <path d="M9.5 14.5 L6.5 17.5" />
    </svg>
  )
}

export function IconClock({ size = 26 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7 V12 L15.5 14" />
    </svg>
  )
}

export function IconCity({ size = 26 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M4 20 V9 L9 6 V20" />
      <path d="M9 20 V4 L15 7 V20" />
      <path d="M15 20 V11 L20 9 V20" />
      <path d="M2 20 H22" />
    </svg>
  )
}

export function IconShield({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M12 3 L19 6 V11.5 C19 16 16 19.3 12 21 C8 19.3 5 16 5 11.5 V6 Z" />
      <path d="M9 12 L11.2 14.2 L15.5 9.5" />
    </svg>
  )
}

export function IconTag({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M12.5 3.5 H19.5 V10.5 L10.5 19.5 C9.7 20.3 8.4 20.3 7.6 19.5 L4.5 16.4 C3.7 15.6 3.7 14.3 4.5 13.5 Z" />
      <circle cx="15.5" cy="7.5" r="1.4" />
    </svg>
  )
}

export function IconHeadset({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M4 13 V12 a8 8 0 0 1 16 0 v1" />
      <rect x="3" y="13" width="4" height="6" rx="1.4" />
      <rect x="17" y="13" width="4" height="6" rx="1.4" />
      <path d="M20 19 v1 a3 3 0 0 1-3 3 h-3.5" />
    </svg>
  )
}

export function IconSpray({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M9 8 h6 l1 13 H8 Z" />
      <path d="M10 8 V5 a2 2 0 0 1 4 0 v3" />
      <path d="M15 4 h3 M16.5 2 v4 M18 3.5 l-3 1" />
    </svg>
  )
}

export function IconCar({ size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...base}>
      <path d="M8 30 L11 20.5 C11.7 18.3 13.7 16.8 16 16.8 H32 C34.3 16.8 36.3 18.3 37 20.5 L40 30" />
      <path d="M6 30 H42 C42 33 39.7 35 37 35 H11 C8.3 35 6 33 6 30 Z" />
      <circle cx="14.5" cy="35" r="3.3" />
      <circle cx="33.5" cy="35" r="3.3" />
    </svg>
  )
}

export function IconSuv({ size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...base}>
      <path d="M6 29 L9 18.5 C9.8 16.5 12.3 14.8 15 14.8 H31 C34.5 14.8 37.5 17 38.5 19.5 L41 29" />
      <path d="M4 29 H43.5 C43.5 32.3 40.9 35 37.7 35 H9.8 C6.6 35 4 32.3 4 29 Z" />
      <circle cx="14" cy="35" r="3.4" />
      <circle cx="34" cy="35" r="3.4" />
      <path d="M9 20.5 H38" />
    </svg>
  )
}

export function IconVan({ size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...base}>
      <path d="M5 30 V19.5 C5 17.6 6.6 16 8.5 16 H28 L38 22 V30" />
      <path d="M4 30 H43 C43 33 40.6 35 37.7 35 H9.3 C6.4 35 4 33 4 30 Z" />
      <circle cx="13.5" cy="35" r="3.4" />
      <circle cx="34.5" cy="35" r="3.4" />
      <path d="M28 16 V22 H38" />
    </svg>
  )
}

export function IconSedanPlus({ size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...base}>
      <path d="M7 29 L10.5 19 C11.3 16.8 14 15 17 15 H29 C32.4 15 35.5 17.2 36.6 20.3 L39 29" />
      <path d="M5 29 H41.5 C41.5 32.3 38.9 35 35.7 35 H10.8 C7.6 35 5 32.3 5 29 Z" />
      <circle cx="14" cy="35" r="3.4" />
      <circle cx="33" cy="35" r="3.4" />
      <path d="M14 19.5 H32" />
    </svg>
  )
}

export function IconCheck({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M5 12.5 L9.5 17 L19 6.5" />
    </svg>
  )
}

export function IconWhatsapp({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17 14.2c-.3-.2-1.7-.9-2-1s-.5-.2-.7.1-.7 1-.9 1.2-.4.2-.7.1a7.3 7.3 0 0 1-2.1-1.3 8 8 0 0 1-1.5-1.9c-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.2-.5s0-.4-.1-.5-.7-1.7-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4C6.3 8 5.7 8.7 5.7 10s.9 2.6 1 2.8c.1.2 1.8 2.8 4.4 3.9.6.2 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.3s-.2-.2-.4-.3Z"/>
      <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 20.2 12 8.2 8.2 0 0 1 12 20.2Z"/>
    </svg>
  )
}
