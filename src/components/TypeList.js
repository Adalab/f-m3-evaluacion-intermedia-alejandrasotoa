import React from 'react';
import './TypeList.css';
import PropTypes from 'prop-types';

class TypeList extends React.Component {
  render () {
    const {typeArray} = this.props;
    const pokemonTypeList = typeArray.map ((type, index) => {
      return <li className="type__list" key={`ty${index}`}> {type}</li>;
    });
    return (
    <ul className="pokemon__types">
      {pokemonTypeList}
    </ul>);
  }
}

TypeList.propTypes = {
  typeArray: PropTypes.arrayOf (PropTypes.string),
};

export default TypeList;
