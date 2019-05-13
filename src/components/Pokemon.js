import React from 'react';

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
          {this.props.pokemonType.map ((type, index) => {
            return <li className="type__list" key={index}> {type}</li>;
          })}

        </ul>
      </div>
    );
  }
}

export default Pokemon;
