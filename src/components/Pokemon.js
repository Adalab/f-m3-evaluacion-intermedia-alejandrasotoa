import React from 'react';
import TypeList from './TypeList';

class Pokemon extends React.Component {
  render () {
    return (
      <div className="pokemon__item--container">
        <img
          className="pokemon__image"
          src={this.props.pokemonURl}
          alt={`Imagen de ${this.props.pokemonName}`}
        />
        <h2 className="pokemon__name">{this.props.pokemonName}</h2>
        <ul className="pokemon__types">
        <TypeList typeArray={this.props.pokemonType} />
        </ul>
      </div>
    );
  }
}

export default Pokemon;
