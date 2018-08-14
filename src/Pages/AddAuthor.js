import React, { Component } from 'react';

import AddAuthorForm from './AddAuthorForm';

import './AddAuthor.css';

class AddAuthor extends Component {
	match;
	state;

	constructor(props) {
		super(props);

		this.match = props.match;
		this.state = {
			author: {
				name: '',
				imageUrl: '',
				books: [],
				bookInput: ''
			},
		};

		this.handleBookAddition = this.handleBookAddition.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onFieldChange = this.onFieldChange.bind(this);
	}

	handleBookAddition(event) {
		this.setState({
			author: {
				...this.state.author,
				books: this.state.author.books.concat([this.state.author.bookInput]),
				bookInput: ''
			}
		})
	}

	handleSubmit(event) {
		event.preventDefault();
	}

	onFieldChange(event) {
		const field = event.target.name;
		const value = event.target.value;

		this.setState({
			author: {
				...this.state.author,
				[field]: value
			}
		});
	}

	render() {
		return (
			<AddAuthorForm author={this.state.author}
										 match={this.match}
										 handleBookAddition={this.handleBookAddition}
										 handleSubmit={this.handleSubmit}
										 onFieldChange={this.onFieldChange} />
		)
	}
}

export default AddAuthor;
