import React from 'react'
import PinIcon from '../assets/pin.svg'

export default function Card(props) {
  const { details } = props
  return (
    <div className="card-journal">
      <img className="card-cover" src={details.imageUrl} alt="journal cover" />
      <div className='card-body'>
        <div className='journal-stats'>
          <img className='pin-icon' src={PinIcon} alt="pin" />
          <span className='stats-location'>{`${details.location}`.toUpperCase()}</span>
          <a className='stats-link' href={details.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1 className='card-title'>{details.title}</h1>
        <span className='journal-dates'>
          {details.startDate} - {details.endDate}
        </span>
        <p className='journal-details'>{details.description}</p>
      </div>
    </div>
  )
}
