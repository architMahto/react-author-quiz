import React from 'react';
import {
	Button,
	Col,
	ControlLabel,
	FormControl,
	FormGroup,
	Grid,
	PageHeader,
	Row
} from 'react-bootstrap';

import './AddAuthorForm.css';

const AddAuthorForm = ({ author, match, handleSubmit, onFieldChange }) => {
	return (
		<Grid fluid={true}>
			<Row>
				<Col xs={12} sm={6} smOffset={3}>
					<PageHeader>Add Author</PageHeader>
					<form className="Add-Author-Form"
								onSubmit={handleSubmit}>
						<Row>
							<Col xs={12} sm={6}>
								<FormGroup controlId="name">
									<ControlLabel>Name:</ControlLabel>
									<FormControl type="text"
															 name="name"
															 placeholder="Enter name"
															 value={author.name}
															 onChange={onFieldChange}
															 bsSize="lg" />
								</FormGroup>
							</Col>
						</Row>
						<br/>
						<Row>
							<Col xs={12} sm={9}>
								<FormGroup controlId="imageUrl">
									<ControlLabel>Image Url:</ControlLabel>
									<FormControl type="text"
															 name="imageUrl"
															 placeholder="Enter image url"
															 value={author.imageUrl}
															 onChange={onFieldChange}
															 bsSize="lg" />
								</FormGroup>
							</Col>
						</Row>
						<br/>
						<Button type={'submit'} bsSize={'large'}>Add</Button>
					</form>
				</Col>
			</Row>
		</Grid>
	);
};

export default AddAuthorForm;
