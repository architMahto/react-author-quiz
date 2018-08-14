import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import AuthorQuiz from '../Pages/AuthorQuiz';

import './App.css';

class App extends Component {
  render() {
    return (
    	<Switch>
				<Route exact path="/" component={AuthorQuiz} />
			</Switch>
    );
  }
}

export default App;
