import React from 'react'
import PinIcon from '../assets/pin.svg'

export default function Card(props) {
  const { details } = props
  return (
    <div className="card-journal">
      <img className="card-cover" src={details.imageUrl} alt="journal cover" />
      <div className='card-body'>
        <div className='journal-stats'>
          <img src={PinIcon} alt="pin" />
          <span>{`${details.location}`.toUpperCase()}</span>
          <a href={details.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1>{details.title}</h1>
        <span>
          {details.startDate} - {details.endDate}
        </span>
        <p>{details.description}</p>
      </div>
    </div>
  )
}
