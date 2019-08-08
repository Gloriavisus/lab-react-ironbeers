import React, { Component } from 'react'
import beersServices from'../services/beersServices';




class RandomBeers extends Component {
  state={
    beer: null,
}
componentDidMount(){
    beersServices.getRandomBeer()
    .then((response)=>{
        this.setState({
            beer: response.data
        })
    })
  }
    goToPreviousPage= ()=>{
      this.props.history.goBack();
  }

  render() {
    const{beer}= this.state;
    return (
      <>
      <header>
         <button onClick={this.goToPreviousPage}>Go Back</button>
      </header>
      <main>
      <a href='/random-beer'>Show a random beers</a>
        {beer ? (
        <section>
          <h2>{beer.name}</h2>
          <img src={beer.image_url} alt={beer.name}/>
          <p>{beer.tagline}</p>
          <p>{beer.first_brewed}</p>
          <p>{beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
        </section>):null}
      </main>
      </>
      
    )
  }
}
export default RandomBeers;