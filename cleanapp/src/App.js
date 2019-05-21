import React, {Component} from 'react';
import CardContainer from './CardContainer'
import UserCard from './UserCard'
import "./App.css"

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

  render() {
    return (<div>
      <h1 className='title'>CleanApp</h1>
      <UserCard user={this.state.user}/>
      <hr/>
      <CardContainer cards={this.state.cards}/>
    </div>)
  }

}
export default App;
