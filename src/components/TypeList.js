import React from 'react';

class TypeList extends React.Component {
  render () {
    const {typeArray} = this.props;
    const pokemonTypeList = typeArray.map ((type, index) => {
      return <li className="type__list" key={index}> {type}</li>;
    });
    return pokemonTypeList;
  }
}

export default TypeList;
