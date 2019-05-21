import React, {Component} from 'react';
import CardContainer from './CardContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      cards: []
    }
  }

  async componentDidMount() {
    const userResponse = await fetch('http://localhost:3000/api/v1/users/')
    const userResult = await userResponse.json()
    await this.setState({users: userResult})

    const cardResponse = await fetch('http://localhost:3000/api/v1/cards/')
    const cardResult = await cardResponse.json()
    await this.setState({cards: cardResult})
  }

  render() {
    return (<div>
      <h1>CleanApp</h1>
      <CardContainer users={this.state.users} cards={this.state.cards}/>

    </div>)
  }

}
export default App;
