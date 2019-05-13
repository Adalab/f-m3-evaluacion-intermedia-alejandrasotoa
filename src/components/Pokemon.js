import React from 'react';
import TypeList from './TypeList';

class Pokemon extends React.Component {
  render () {
    const {pokemonURl, pokemonName, pokemonType} = this.props;
    return (
      <div className="pokemon__item--container">
        <img
          className="pokemon__image"
          src={pokemonURl}
          alt={`Imagen de ${pokemonName}`}
        />
        <h2 className="pokemon__name">{pokemonName}</h2>
        <ul className="pokemon__types">
        <TypeList typeArray={pokemonType} />
        </ul>
      </div>
    );
  }
}

export default Pokemon;
