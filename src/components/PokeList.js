import React from 'react';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
  render () {

    const newArray = this.props.arrayList.map((pokemon, index) => {
        return (
          <li key={index} className="pokemon__item">
            <Pokemon pokemonURl={pokemon.url} pokemonName={pokemon.name} pokemonType={pokemon.types} />
          </li>

        )
      })
    return newArray;
  }
}

export default PokeList;
