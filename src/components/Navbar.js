import React from 'react'
import GlobeIcon from '../assets/globe.svg'

export default function Navbar() {
  return (
    <nav>
      <img src={GlobeIcon} alt="globe icon" />
      <h1>my travel journal</h1>
    </nav>
  )
}
