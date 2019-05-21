import React from 'react';
import Pokemon from './Pokemon';
import './PokeList.css';
import PropTypes from 'prop-types';


class PokeList extends React.Component {
  render () {
    const { isFavorite } = this.props; 
    const { favoritesArray } = this.props;
    const { arrayList } = this.props;

    const newArray = arrayList.map((pokemon) => {
        return (
          <li key={pokemon.id} id={pokemon.id} className={`pokemon__item pokemon__item--container ${favoritesArray.includes(pokemon.id) ? 'favorite' : '' }`} onClick={isFavorite}>
            <Pokemon pokemonURl={pokemon.url} pokemonName={pokemon.name} pokemonType={pokemon.types}/>
          </li>
        )
      })
    return (<ul className="pokemon__list">
    {newArray}
    </ul>)
  }
}

PokeList.propTypes = {
  arrayList: PropTypes.arrayOf(PropTypes.object),
  isFavorite: PropTypes.func
};

export default PokeList;
