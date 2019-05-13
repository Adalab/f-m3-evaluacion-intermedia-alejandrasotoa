import React from 'react';

class PokeList extends React.Component {
  render () {

    const newArray = this.props.arrayList.map((pokemon, index) => {
        return (
          <li key={index} className="pokemon__item">
            <div className="pokemon__item--container">
              <img className="pokemon__image" src={pokemon.url} alt={`Imagen de ${pokemon.name}`} />
              <h2 className="pokemon__name">{pokemon.name}</h2>
            </div>
          </li>
        )
      })
    return newArray;
  }
}

export default PokeList;
