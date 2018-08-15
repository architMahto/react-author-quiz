import React from 'react'
import { Col, Row } from 'react-bootstrap';

import './Footer.css';

const Footer = () => {
	return (
		<Row className="Footer">
			<Col xs={12} sm={12}>
				<p className="text-muted">All images are from <a href="https://commons.wikimedia.org/wiki/Main_Page">Wikimedia Commons</a> and are in the public domain</p>
			</Col>
		</Row>
	);
};

export default Footer;
