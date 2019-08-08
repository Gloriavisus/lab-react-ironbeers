import axios from 'axios';

class BeersService{
  constructor(){
      this.beer = axios.create({
          baseURL:'https://ih-beer-api.herokuapp.com/beers/',
      })

  }
 getAllBeers(){
    return this.beer.get()
     .then(response => response)
 }
 getOneBeer(id){
    return this.beer.get(`${id}`)
      .then(response => response)
 }
 getRandomBeer(){
   return this.beer.get('random')
   .then(response => response)
 }
}

const beersService = new BeersService();
export default beersService;