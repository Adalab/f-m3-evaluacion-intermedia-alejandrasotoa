import React from 'react';
import PokeList from './components/PokeList';
import pokemonList from './data/data';
import './App.css';
import MyFavorites from './components/MyFavorites';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      pokemon: pokemonList,
      favorite: [],
    };
    this.isFavorite = this.isFavorite.bind (this);
  }

  isFavorite (event) {
    const favoriteID = parseInt (event.currentTarget.id);
    this.setState (prevState => {
      let handleFavorite;
      if (prevState.favorite.includes (favoriteID)) {
        handleFavorite = prevState.favorite.filter (fav => fav !== favoriteID);
      } else {
        handleFavorite = [...prevState.favorite, favoriteID];
      }
      return {favorite: handleFavorite};
    });
  }

  render () {
    return (
      <div className="App">
        <h1 className="main__title">Mi lista de Pokemon</h1>
        <MyFavorites favoritesArray={this.state.favorite} />
        <PokeList
          arrayList={this.state.pokemon}
          favoritesArray={this.state.favorite}
          isFavorite={this.isFavorite}
        />
      </div>
    );
  }
}

export default App;
