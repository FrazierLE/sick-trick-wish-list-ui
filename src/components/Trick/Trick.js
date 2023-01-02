import React from 'react'
import './Trick.css'

function Trick({ id, name, obstacle, stance, tutorial}) {
  return (
    <div className='trick-item'>
      <h2>{stance} {name}</h2>
      <a href={tutorial}>Link to tutorial: {tutorial}</a>
    </div>
  )
}

export default Trick