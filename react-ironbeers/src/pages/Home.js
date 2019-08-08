import React from 'react'
import {Link} from 'react-router-dom';

 const Home = ()=> {
    return (
        <div>
          <ul>
                <li>
                    <Link to='/beers'>See beers</Link>
                </li>
                <li>
                    <Link to='/new-beer'>Add beers</Link>
                </li>
                <li>
                  <Link to='/random-beer'>Show a random beers</Link>
                </li>
            </ul>
        </div>
    )
}
export default Home;