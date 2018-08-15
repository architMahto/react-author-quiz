import React from 'react';
import { Col, Button, Row } from 'react-bootstrap';

import './Continue.css';

const Continue = ({show, onContinue}) => {
	return (
		<Row className="Continue">
			<Col xs={12} sm={11}>
				{
					show ?
						<Button type={'button'}
										onClick={onContinue}
										className="Continue-Button"
										bsSize={'large'}
										bsStyle={'primary'}>
							Continue
						</Button> :
						null
				}
			</Col>
		</Row>
	)
};

export default Continue;
