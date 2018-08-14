import React from 'react';

import './Book.css';

const Book = ({ title, onClick }) => {
	return (
		<h4 className="Answer" onClick={() => { onClick(title); }}>{ title }</h4>
	);
};

export default Book;
