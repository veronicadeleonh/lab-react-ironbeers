import React from 'react';
import axios from 'axios';
import Header from './Header';

export default class BeerDetail extends React.Component {
  state = {
    beer: null,
  };

  getBeerId = () => {
    let beerId = this.props.match.params.id;
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((beer) => {
        this.setState({
          beer: beer.data,
        });
      });
  };

  render() {
    if (!beer) {
      return <></>;
    }
    return (
      <div>
        <Header />
      </div>
    );
  }
}
