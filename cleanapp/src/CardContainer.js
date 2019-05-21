import React from 'react'
import Card from './Card'

const Container = props => {

  const cards = props.cards.map((card, i) => <Card {...card} key={Date.now() + i} />)

  return(
    <div className="">
      {cards}
    </div>
  )
}

export default Container
