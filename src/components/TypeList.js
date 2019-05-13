import React from 'react';

class TypeList extends React.Component {
  render () {
    const pokemonTypeList = this.props.typeArray.map ((type, index) => {
      return <li className="type__list" key={index}> {type}</li>;
    });
    return pokemonTypeList;
  }
}

export default TypeList;
