import React from 'react';

class MyFavorites extends React.Component {
    render() {
        const {favoritesArray} = this.props;
        return <div>{console.log(favoritesArray)}</div>;
    }
}

export default MyFavorites;