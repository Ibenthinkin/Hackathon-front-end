import React, { Component } from 'react'
import "./Card.css"


class Card extends React.Component {
  state ={
    completed:false
  }

  handleChange = event => {
    const num = parseInt(event.target.parentElement.lastElementChild.innerText)
    this.props.addTree(num)
  }

  render(){
  return(
    <div className='user-card hvr-grow '>
      <h3>{this.props.description}</h3>
      <button onClick={this.handleChange}>Complete!</button>
      <div className='points-div'>
      <img className='card-tree'src={require(`./images/tree.png`)}></img>
      <p>{this.props.points}</p>
      </div>

    </div>

  )
}
}


export default Card;
