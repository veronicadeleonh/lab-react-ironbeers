import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import { Link } from 'react-router-dom';

export default class AllBeers extends Component {
  state = {
    beers: [],
  };

  // to call the API

  getBeerData = () => {
    let beerCode = this.props.match.params.id;
    console.log(beerCode);

    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((beerList) => {
        this.setState({ beers: beerList.data });
        // console.log('beerlist', beerList);
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getBeerData();
  }

  render() {
    console.log('state.beers', this.state.beers);

    return (
      <div>
        <Header />
        {this.state.beers.map((beer) => {
          // console.log('beer names', beer.name);
          return (
            <div key={beer.name}>
              <img
                src={beer.image_url}
                style={{ width: '90px' }}
                alt={beer.name}
              />
              <Link to={`/${beer._id}`}>
                <h2>{beer.name}</h2>
              </Link>
              <h4>{beer.tagline}</h4>
              <p>Created by: {beer.contributed_by}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
