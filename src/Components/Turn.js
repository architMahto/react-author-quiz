import React from 'react';
import { Col, Grid, Image, Row } from 'react-bootstrap';

import Book from './Book';

import './Turn.css';

const HIGHLIGHT_BG_COLOR_MAPPING = {
	'none': 'white',
	'correct': 'green',
	'wrong': 'red'
};

const Turn = ({ author, books, highlight }) => {
	return (
		<Grid fluid={true}>
			<Row className="Turn" style={{backgroundColor: HIGHLIGHT_BG_COLOR_MAPPING[highlight]}}>
				<Col xs={12} sm={4} smOffset={1}>
					<Image className="Author-Image" src={author.imageUrl} alt="Author" responsive rounded />
				</Col>
				<Col xs={12} sm={6}>
					{books.map(title => (<Book title={title} key={title} />))}
				</Col>
			</Row>
		</Grid>
	)
};

export default Turn;
