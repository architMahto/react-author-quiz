import React, { Component } from 'react';

import Continue from './Continue';
import Footer from './Footer';
import Hero from './Hero';
import Turn from './Turn';

import AuthorsApi from '../Api/AuthorsApi';

import './AuthorQuiz.css'

class AuthorQuiz extends Component {
	state;

	constructor(props) {
		super(props);

		this.state = {
			turnData: {
				author: '',
				books: []
			},
			highlight: ''
		};

		this.onAnswerSelected = this.onAnswerSelected.bind(this);
	}

	componentDidMount() {
		this.setState({
			turnData: AuthorsApi.getTurnData(),
			highlight: ''
		})
	}

	onAnswerSelected(answer) {
		const isCorrect = this.state.turnData.author.books.some(book => book === answer);

		this.setState({
			...this.state,
			highlight: isCorrect ? 'correct' : 'wrong'
		});
	}

	render() {
		return (
			<div className="container-fluid">
				<Hero />
				<Turn author={this.state.turnData.author}
							books={this.state.turnData.books}
						  highlight={this.state.highlight}
						  onAnswerSelected={this.onAnswerSelected}/>
				<Continue />
				<Footer />
			</div>
		)
	}
}

export default AuthorQuiz;
