import React from 'react';
// import './images/tree.png'

const UserCard = props => {
  return(
    <div>
    <h2 className='welcome'>Welcome, {props.user.name}!</h2>

  <div >
    <img className='top-tree'src={require(`./images/tree.png`)}></img>
    <p className='top-tree-count'>{props.user.points}</p>
    </div>
    </div>


  )
}

export default UserCard;
