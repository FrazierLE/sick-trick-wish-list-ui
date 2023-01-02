import React from 'react'
import Trick from '../Trick/Trick'

function TricksContainer(tricks) {
  const trickList = tricks.tricks.map(item => {
      return (< Trick 
        key={item.id}
        id={item.id}
        name={item.name}
        obstacle={item.obstacle}
        stance={item.stance}
        tutorial={item.tutorial}
      />)
  })
  return (
    <div className='trick-list' style={{display: "flex", alignContent: "center", flexDirection: "row", justifyContent: "space-around"}}>
      {trickList}
    </div>
  )
}

export default TricksContainer