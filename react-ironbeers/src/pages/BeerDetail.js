import React, { Component } from 'react'
import beersServices from'../services/beersServices';

class BeerDetail extends Component {
  state={
    beer: null,
}
componentDidMount(){
    const {id}=this.props.match.params;
    beersServices.getOneBeer(id)
    .then((response)=>{
        this.setState({
            beer: response.data
        })
    })
    .catch((error)=>{
        console.log(error);
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
         <button onClick={this.goToPreviousPage}>Go Back</button>}
      </header>
      <main>
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
    );
  }
}
export default BeerDetail;