import React, { Component } from 'react';

import Hero from '../Components/Hero';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
				<Hero />
			</div>
    );
  }
}

export default App;
