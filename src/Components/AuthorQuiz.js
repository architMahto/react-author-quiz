import React, { Component } from 'react';

import Continue from './Continue';
import Footer from './Footer';
import Hero from './Hero';
import Turn from './Turn';

import './AuthorQuiz.css'

class AuthorQuiz extends Component {
	render() {
		return (
			<div className="container-fluid">
				<Hero />
				<Turn />
				<Continue />
				<Footer />
			</div>
		)
	}
}

export default AuthorQuiz;
