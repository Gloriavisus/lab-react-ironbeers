import React, { Component } from 'react'
//import {Link} from 'react-router-dom';

class NewBeer extends Component {
    goToPreviousPage= ()=>{
      this.props.history.goBack();
  }

  render() {
    return (
      <header>
      <button onClick={this.goToPreviousPage}>Go Back</button>
   </header>
    )
  }
}
export default NewBeer