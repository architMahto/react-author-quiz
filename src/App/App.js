import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AddAuthor from '../Pages/AddAuthor';
import AuthorQuiz from '../Pages/AuthorQuiz';

import './App.css';

class App extends Component {
  render() {
    return (
    	<Router>
				<Switch>
					<Route exact path="/" component={AuthorQuiz} />
					<Route path="/add-author" component={AddAuthor} />
				</Switch>
			</Router>
    );
  }
}

export default App;
