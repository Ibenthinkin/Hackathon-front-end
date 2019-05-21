import React from 'react'
import Card from './Card'
import './Container.css'

const Container = props => {

  const cards = props.cards.map((card, index) => <Card {...card} key={card.id} addTree={props.addTree}/>)

  // let sixCards = cards.sort(() => .5 - Math.random()).slice(0,6)



  return(
    <div className="card">
      {cards}
    </div>
  )
}

export default Container
