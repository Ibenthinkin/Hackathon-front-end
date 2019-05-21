import React from 'react'
import Card from './Card'
import './Container.css'

const Container = props => {

  const cards = props.cards.map((card, index) => <Card {...card} key={Date.now() + index} />)

  return(
    <div className="card">
      {cards}
    </div>
  )
}

export default Container
