import React, { Component } from 'react'
import "./Card.css"


class Card extends React.Component {
  state ={
    completed:false
  }

  handleChange = event => {
    
  }

  render(){
  return(
    <div className='user-card hvr-grow '>
      <h3>{this.props.description}</h3>
      <div className='points-div'>
      <img className='card-tree'src={require(`./images/tree.png`)}></img>
      <p>x{this.props.points}</p>
      </div>

    </div>

  )
}
}


export default Card;
