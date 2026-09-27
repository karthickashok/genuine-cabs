import { FormEvent, useState } from 'react'
import { site } from '../data/site'

type TripType = 'one-way' | 'round-trip' | 'airport'
type BookingType = 'chauffeur' | 'self-drive' | 'car-rental'

const tripLabels: Record<TripType, string> = {
  'one-way': 'One way',
  'round-trip': 'Round trip',
  airport: 'Airport',
}

export default function BookingForm() {
  const [bookingType, setBookingType] = useState<BookingType>('chauffeur')
  const [trip, setTrip] = useState<TripType>('one-way')
  const [pickup, setPickup] = useState('')
  const [drop, setDrop] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [duration, setDuration] = useState('')
  const [vehicle, setVehicle] = useState('')

  const bookingLabels: Record<BookingType, string> = {
    chauffeur: `${tripLabels[trip]} chauffeur-driven ride`,
    'self-drive': 'self-drive car rental',
    'car-rental': 'car rental with a driver',
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const message =
      `Hi Genuine Cabs, I'd like to enquire about a ${bookingLabels[bookingType]}.\n` +
      `${bookingType === 'chauffeur' ? 'Pickup' : 'Pickup / rental location'}: ${pickup || '-'}\n` +
      (bookingType === 'chauffeur' ? `Drop: ${drop || '-'}\n` : `Rental duration: ${duration || '-'}\n`) +
      `Date & time: ${date || '-'} ${time || ''}\n` +
      `Vehicle preference: ${vehicle || 'Any available'}`

    const url = `${site.whatsappHref}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="booking-card" id="book">
      <h2>Book a ride or rental</h2>
      <p className="booking-card__sub">Choose a driver or take the wheel yourself.</p>

      <div className="trip-toggle booking-toggle" role="tablist" aria-label="Booking type">
        {([
          ['chauffeur', 'With driver'],
          ['self-drive', 'Self-drive'],
          ['car-rental', 'Car + driver'],
        ] as [BookingType, string][]).map(([key, label]) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-pressed={bookingType === key}
            onClick={() => setBookingType(key)}
          >
            {label}
          </button>
        ))}
      </div>

      {bookingType === 'chauffeur' && (
        <div className="trip-toggle" role="tablist" aria-label="Trip type">
          {(Object.keys(tripLabels) as TripType[]).map((key) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-pressed={trip === key}
              onClick={() => setTrip(key)}
            >
              {tripLabels[key]}
            </button>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <label htmlFor="pickup">{bookingType === 'chauffeur' ? 'Pickup location' : 'Pickup / rental city'}</label>
          <input
            id="pickup"
            type="text"
            placeholder={bookingType === 'chauffeur' ? 'e.g. T. Nagar, Chennai' : 'e.g. Chennai'}
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            required
          />
        </div>

        {bookingType === 'chauffeur' ? (
          <div className="field-group">
            <label htmlFor="drop">{trip === 'airport' ? 'Airport / terminal' : 'Drop location'}</label>
            <input
              id="drop"
              type="text"
              placeholder={trip === 'airport' ? 'e.g. Chennai Airport, T4' : 'e.g. Pondicherry'}
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
              required
            />
          </div>
        ) : (
          <div className="field-group">
            <label htmlFor="duration">Rental duration</label>
            <input
              id="duration"
              type="text"
              placeholder="e.g. 2 days or 6 hours"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
          </div>
        )}

        <div className="field-row">
          <div className="field-group">
            <label htmlFor="date">Date</label>
            <input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </div>
          <div className="field-group">
            <label htmlFor="time">Time</label>
            <input id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
          </div>
        </div>

        {bookingType !== 'chauffeur' && (
          <div className="field-group">
            <label htmlFor="vehicle">Car preference <span>(optional)</span></label>
            <input
              id="vehicle"
              type="text"
              placeholder="e.g. hatchback, sedan or SUV"
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
            />
          </div>
        )}

        <button type="submit" className="btn btn-primary btn-block">Check availability</button>
      </form>

      <p className="booking-card__note">Sends your booking request to us on WhatsApp — no account needed.</p>
    </div>
  )
}
