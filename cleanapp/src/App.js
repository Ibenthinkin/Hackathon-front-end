import React, {Component} from 'react';
import CardContainer from './CardContainer'
import UserCard from './UserCard'
import "./App.css"
const axios = require('axios');

class App extends Component {

  constructor() {
    super()
    this.state = {
      user: [],
      cards: []
    }
  }

  async componentDidMount() {
    const userResponse = await fetch('http://localhost:3000/api/v1/users/')
    const userResult = await userResponse.json()
    await this.setState({user: userResult[0]})


    const cardResponse = await fetch('http://localhost:3000/api/v1/cards/')
    let cardResult = await cardResponse.json()
    cardResult = cardResult.sort(() => .5 - Math.random()).slice(0,6)
    await this.setState({cards: cardResult})
  }

addTree = (amount) => {
  let newAmount = this.state.user.points
  let userName = this.state.user.name
  newAmount += amount
  this.setState(prevState => ({
    user: {
        points: newAmount,
        name: userName
    }
}))
    return fetch('http://localhost:3000/api/v1/users/2', {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        points: newAmount
      })
})
.then(response => {
  console.log(response);
})
.catch(error => {
  console.log(error);
});
  }

  render() {
    return (<div>
      <h1 className='title'>CleanApp</h1>
      <img className='globe'src={require(`./images/worldwide.png`)}></img>
      <UserCard user={this.state.user}/>
      <hr/>
      <CardContainer addTree={this.addTree} cards={this.state.cards}/>
    </div>)
  }

}
export default App;
