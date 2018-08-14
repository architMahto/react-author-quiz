import React, { Component } from 'react';

class AddAuthor extends Component {
	match;

	constructor(props) {
		super(props);

		this.match = props.match;
	}

	render() {
		return (
			<div>
				<h1>Add Author</h1>
				<p>{JSON.stringify(this.match)}</p>
			</div>
		)
	}
}

export default AddAuthor;
