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
				imageUrl: ''
			},
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.onFieldChange = this.onFieldChange.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
	}

	onFieldChange(event) {
		const field = event.target.name;
		const value = event.target.value;

		console.log('field:', field);
		console.log('value:', value);

		this.setState({
			...this.state,
			author: {
				...this.state.author,
				[field]: value
			}
		});

		console.log('this.state:', this.state);
	}

	render() {
		return (
			<AddAuthorForm author={this.state.author}
										 match={this.match}
										 handleSubmit={this.handleSubmit}
										 onFieldChange={this.onFieldChange}/>
		)
	}
}

export default AddAuthor;
