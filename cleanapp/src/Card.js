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

changeComplete = event => {
  const completedState = event.target.parentElement
  completedState.classList.add('completed')

}

  handleChange = event => {
    const num = parseInt(event.target.parentElement.lastElementChild.innerText)
    this.props.addTree(num)
    this.bounceButton(event)
    this.changeComplete(event)
  }


  render(){
  return(
    <div className='user-card hvr-grow '>
      <h3 className='card-title'>{this.props.description}</h3>
      <img className="gif" src={this.props.keyword} alt=''/>
      <button className='doneButton'onClick={this.handleChange}>Complete!</button>
      <div className='points-div'>
      <img className='card-tree'src={require(`./images/tree.png`)}></img>
      <p>{this.props.points}</p>
      </div>

    </div>

  )
}
}


export default Card;
