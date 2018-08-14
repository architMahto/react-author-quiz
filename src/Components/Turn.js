import React from 'react';
import { Col, Grid, Image, Row } from 'react-bootstrap';

import './Turn.css';

const Turn = (props) => {
	console.log('props:', props);

	return (
		<Grid fluid={true}>
			<Row className="turn" style={{backgroundColor: "white"}}>
				<Col xs={12} md={4} mdOffset={1}>
					<Image src={props.author.imageURL} alt="Author" responsive rounded />
				</Col>
			</Row>
		</Grid>
	)
};

export default Turn;
