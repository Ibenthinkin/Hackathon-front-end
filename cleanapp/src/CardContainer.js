import React from 'react'
import Card from './Card'
import './Container.css'

const Container = props => {

  const cards = props.cards.map((card, index) => <Card {...card} key={card.id} />)

  let sixCards = cards.sort(() => .5 - Math.random()).slice(0,6)





  return(
    <div className="card">
      {sixCards}
    </div>
  )
}

export default Container
