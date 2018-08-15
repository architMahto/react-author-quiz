import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

import Book from './Book';

import './Turn.css';

const HIGHLIGHT_BG_COLOR_MAPPING = {
	'none': 'white',
	'correct': '#449d44',
	'wrong': '#c9302c'
};

const Turn = ({ author, books, highlight, onAnswerSelected }) => {
	return (
		<Row className="Turn" style={{backgroundColor: HIGHLIGHT_BG_COLOR_MAPPING[highlight]}}>
			<Col xs={12} sm={4} smOffset={1}>
				<Image className="Author-Image" src={author.imageUrl} alt="Author" responsive rounded />
			</Col>
			<Col xs={12} sm={6}>
				{books.map(title => (<Book title={title} key={title} onClick={onAnswerSelected} />))}
			</Col>
		</Row>
	)
};

export default Turn;
