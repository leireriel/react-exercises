import React, {Component} from "react";
import {Link} from 'react-router-dom';

class Home extends Component {

  paintArray() {
    const {pokemons, filterName} = this.props;
    return pokemons
      .filter(item => item.name.includes(filterName))
      .map((item, index) => {
        return (
          <li className="pokemon" key={item.id}>
            <Link to={`/detail/${item.id}`}>{item.name}</Link>
          </li>
        );
      });
  }

  render() {
    const { handleNameFilter } = this.props;

    // const finalArray = this.props.pokemons
    //   .filter(item => item.name.includes(this.props.filterName))
    //   .map((item, index) => {
    //     return (
    //       <li className="pokemon" key={item.id}>
    //         <Link to={`/detail/${item.id}`}>{item.name}</Link>
    //       </li>
    //     );
    //   });

    // const results = finalArray.length;


    return (
      <div className="home">
        <input type="text" onChange={handleNameFilter} />
        <p>Resultados: {this.paintArray().length}</p>
        <ul className="pokemons">
          {this.paintArray()}
        </ul>
      </div>
    );
  }
}

export default Home;