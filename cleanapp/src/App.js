import React, { Component } from 'react';
import CardContainer from './CardContainer'
class App extends Component {

  constructor() {
    super()
    this.state = {
      corpses: [],
      lines: []
    }
  }

  async componentDidMount () {
       const response = await fetch('http://localhost:3000/api/v1/users/')
       const corpses = await response.json()
       await this.setState( {corpses: corpses} )

       const response2 = await fetch('http://localhost:3000/api/v1/cards/')
            const lines = await response2.json()
            await this.setState( {lines: lines} )
            console.log(lines)
  }





  render(){
    return (
      <div><h1>CleanApp</h1>
        <CardContainer users={this.state.users} cards={this.state.cards}/>

      </div>
    )
  }


}
export default App;
