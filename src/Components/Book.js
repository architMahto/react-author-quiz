import React from 'react';

import './Book.css';

const Book = ({ title, key }) => {
	return (
		<h4 className="Answer">{ title }</h4>
	);
};

export default Book;
