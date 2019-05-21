import React, { Component } from 'react'
import "./Card.css"


class Card extends React.Component {
  state ={
    completed:false,
  }

  bounceButton = event => {
    let treePic = document.querySelector(".top-tree")

    treePic.classList.add('animated')
    treePic.classList.add('wobble')
    // animated infinite bounce
  }

  handleChange = event => {
    const num = parseInt(event.target.parentElement.lastElementChild.innerText)
    this.props.addTree(num)
    this.bounceButton(event)
  }


  render(){
  return(
    <div className='user-card hvr-grow '>
      <h3>{this.props.description}</h3>
      <img className="gif" src='https://media.tenor.com/images/ff4f31cd5064722ed52609069653fe77/tenor.gif' alt=''/>
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
