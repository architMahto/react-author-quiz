import React, { Component } from 'react';

import Continue from '../Components/Continue';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import Turn from '../Components/Turn';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
				<Hero />
				<Turn />
				<Continue />
				<Footer />
			</div>
    );
  }
}

export default App;
