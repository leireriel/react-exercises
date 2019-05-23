import React from 'react';
import {fetchPokemons} from './services/fetchPokemons';
import Home from './components/Home';
import PokemonDetail from './components/PokemonDetail';
import {Switch, Route} from 'react-router-dom';

class PokeRepaso extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
      filterName: ''
    };
    this.handleNameFilter = this.handleNameFilter.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
  }

  componentDidMount(){
    this.getPokemons();
  }

  resetFilters() {
    this.setState({
      filterName: ''
    });
  }

  getPokemons(){
    fetchPokemons()
      .then(data => {

        const newData = data.map((item, index) => {
          return {...item, id: `pokeid-${index}`};
        });

        this.setState({
          pokemons: newData 
        })
      });
  }

  handleNameFilter(event) {
    const query = event.currentTarget.value;

    this.setState({
      filterName: query
    })
  }

  render() {
    const {pokemons, filterName} = this.state;
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => <Home
            pokemons={pokemons} 
            handleNameFilter={this.handleNameFilter}
            filterName={filterName}
            />
          } />
          <Route path="/detail/:criatura" render={(recogeParametros) => <PokemonDetail parametros={recogeParametros} pokemons={pokemons} resetFilters={this.resetFilters} />} />
        </Switch>

        
        
      </div>
    );
  }
}

export default PokeRepaso;
