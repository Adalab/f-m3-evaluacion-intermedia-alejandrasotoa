import React from 'react';
import TypeList from './TypeList';
import './Pokemon.css';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render () {
    const {pokemonURl, pokemonName, pokemonType} = this.props;
    return (
      <React.Fragment>
        <img
          className="pokemon__image"
          src={pokemonURl}
          alt={`Imagen de ${pokemonName}`}
        />
        <h2 className="pokemon__name">{pokemonName}</h2>
          <TypeList typeArray={pokemonType} />
      </React.Fragment>
    );
  }
}

Pokemon.propTypes = {
  pokemonURl: PropTypes.string,
  pokemonName: PropTypes.string,
  pokemonType: PropTypes.arrayOf (PropTypes.string),
};

export default Pokemon;
