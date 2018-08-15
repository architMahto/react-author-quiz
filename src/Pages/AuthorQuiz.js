import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Grid, Row } from 'react-bootstrap';

import Continue from '../Components/Continue';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import Turn from '../Components/Turn';

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
		this.onContinue = this.onContinue.bind(this);
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

	onContinue() {
		this.setState({
			...this.state,
			turnData: AuthorsApi.getTurnData(),
			highlight: ''
		})
	}

	render() {
		return (
			<Grid fluid={true}>
				<Hero />
				<Turn author={this.state.turnData.author}
							books={this.state.turnData.books}
						  highlight={this.state.highlight}
						  onAnswerSelected={this.onAnswerSelected}/>
				<Continue show={this.state.highlight === 'correct'}
									onContinue={this.onContinue}/>
				<Row>
					<Col xs={12} sm={12}>
						<Link to={'/add-author'}>Add Author</Link>
					</Col>
				</Row>
				<Footer />
			</Grid>
		)
	}
}

export default AuthorQuiz;
