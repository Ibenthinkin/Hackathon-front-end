import React, {Component} from 'react';
import CardContainer from './CardContainer'
import UserCard from './UserCard'
import "./App.css"
// const axios = require('axios');

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
    const cardResult = await cardResponse.json()
    await this.setState({cards: cardResult})
  }

addTree = (amount) => {
  let newAmount = this.state.user.points
  newAmount += amount
  this.setState(prevState => ({
    user: {
        points: newAmount
    }
}))
    return fetch('http://localhost:3000/api/v1/users/1', {
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
      <UserCard user={this.state.user}/>
      <hr/>
      <CardContainer addTree={this.addTree} cards={this.state.cards}/>
    </div>)
  }

}
export default App;
