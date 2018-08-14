import React, { Component } from 'react';

import Continue from './Continue';
import Footer from './Footer';
import Hero from './Hero';
import Turn from './Turn';

import { Authors } from '../Data/Authors';

import './AuthorQuiz.css'

class AuthorQuiz extends Component {
	constructor(props) {
		super(props);

		this.state = {
			turnData: {
				author: Authors[0],
				books: Authors[0].books
			}
		};
	}

	// componentDidMount() {
	// 	this.setState({
	// 		turnData: {
	// 			author: Authors[0],
	// 			books: Authors[0].books
	// 		}
	// 	})
	// }

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
