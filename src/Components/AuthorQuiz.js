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
			}
		};
	}

	componentDidMount() {
		this.setState({
			turnData: AuthorsApi.getTurnData()
		})
	}

	render() {
		return (
			<div className="container-fluid">
				<Hero />
				<Turn author={this.state.turnData.author}
							books={this.state.turnData.books} />
				<Continue />
				<Footer />
			</div>
		)
	}
}

export default AuthorQuiz;
