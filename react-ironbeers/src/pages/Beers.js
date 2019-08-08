import React, { Component } from 'react'
import beersServices from'../services/beersServices';
import {Link} from 'react-router-dom';

class Beers extends Component {
  state ={
    beers: [],
}
componentDidMount(){
   beersServices.getAllBeers()
    .then((response) => {
       const beersFromAPI= response.data
       this.setState({
           beers: beersFromAPI,
       })
    })
    .catch((error) => {
       console.log(error);
    })
}
  goToPreviousPage= ()=>{
    this.props.history.goBack();
}
  render() {
    return (
      <>
      <header>
         <button onClick={this.goToPreviousPage}>Go Back</button>
      </header>
      <section className= 'container'>
      {this.state.beers.length > 0 ? this.state.beers.map((beer) => {
          return(
             <article key={beer._id}>
                 <h3>{beer.name}</h3>
                 <Link to={`/beers/${beer._id}`}>
                     <img src={beer.image_url} alt={beer.name}/>
                 </Link>
                 <p>{beer.tagline}</p>
                 <p>{beer.contributed_by}</p>
              </article>
          )
        }) : <p>Loading...</p>}
     </section>
    </>
          )
    }
}
export default Beers;