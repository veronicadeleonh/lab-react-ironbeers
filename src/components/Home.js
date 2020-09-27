import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(params) {
  return (
    <div>
      <Link to="/beers">All Beers</Link>
      <Link to="/random-beer">Random Beers</Link>
      <Link to="/new-beer">New Beer</Link>
    </div>
  );
}
