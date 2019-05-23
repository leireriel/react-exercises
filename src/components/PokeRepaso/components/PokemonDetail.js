import React, {Component, Fragment} from "react";
import {Link} from 'react-router-dom';

class PokemonDetail extends Component {

  componentWillUnmount() {
    this.props.resetFilters();
  }

  render() {
    const {pokemons} = this.props;
    const pokeid = this.props.parametros.match.params.criatura;

    const poke = pokemons.find(item => item.id === pokeid);

    return (
      <Fragment>
        {poke ? 
          <div className="detail">
            <p>Soy un detalle de {poke.name}.</p>
            <img src={poke.url} alt={poke.name} />
          </div>  
        :
          <p>No hay nada que ver, no me formen corrillos</p>
        }
        
        <Link to="/">Volver al listado de pokemons</Link>
      </Fragment>
    );
  }
}

export default PokemonDetail;