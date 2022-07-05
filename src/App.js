import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

import { Journal } from './data'

export default function App() {
  const journal = Journal.map((details, index) => {
    const isLastItem = Journal.length - 1 === index
    return (
      <>
        <Card key={details.title + index} details={details} />
        {!isLastItem && <hr />}
      </>
    )
  })

  return (
    <>
      <Navbar />
      <div className="card-container">{journal}</div>
    </>
  )
}
