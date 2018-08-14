import React, { Component } from 'react';

import Continue from './Continue';
import Footer from './Footer';
import Hero from './Hero';
import Turn from './Turn';

import AuthorsApi from '../Api/AuthorsApi';

import './AuthorQuiz.css'

class AuthorQuiz extends Component {
	constructor(props) {
		super(props);

		this.state = {
			turnData: {
				author: '',
				books: []
			},
			highlight: ''
		};
	}

	componentDidMount() {
		this.setState({
			turnData: AuthorsApi.getTurnData(),
			highlight: ''
		})
	}

	render() {
		return (
			<div className="container-fluid">
				<Hero />
				<Turn author={this.state.turnData.author}
							books={this.state.turnData.books}
						 highlight={this.state.highlight} />
				<Continue />
				<Footer />
			</div>
		)
	}
}

export default AuthorQuiz;
