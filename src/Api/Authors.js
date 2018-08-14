import marktwain from './Images/marktwain.jpg';
import josephconrad from './Images/josephconrad.PNG';
import jkrowling from './Images/jkrowling.jpg';
import stephenking from './Images/stephenking.jpg';
import charlesdickens from './Images/charlesdickens.jpg';
import williamshakespeare from './Images/williamshakespeare.jpg';

export const Authors = [
	{
		name: 'Mark Twain',
		imageUrl: marktwain,
		imageSource: 'Wikimedia Commons',
		books: ['The Adventures of Huckleberry Finn']
	},
	{
		name: 'Joseph Conrad',
		imageUrl: josephconrad,
		imageSource: 'Wikimedia Commons',
		books: ['Heart of Darkness']
	},
	{
		name: 'J.K. Rowling',
		imageUrl: jkrowling,
		imageSource: 'Wikimedia Commons',
		imageAttribution: 'Daniel Ogren',
		books: ['Harry Potter and the Sorcerers Stone']
	},
	{
		name: 'Stephen King',
		imageUrl: stephenking,
		imageSource: 'Wikimedia Commons',
		imageAttribution: 'Pinguino',
		books: [
			'The Shining',
			'IT'
		]
	},
	{
		name: 'Charles Dickens',
		imageUrl: charlesdickens,
		imageSource: 'Wikimedia Commons',
		books: [
			'David Copperfield',
			'A Tale of Two Cities'
		]
	},
	{
		name: 'William Shakespeare',
		imageUrl: williamshakespeare,
		imageSource: 'Wikimedia Commons',
		books: [
			'Hamlet',
			'Macbeth',
			'Romeo and Juliet'
		]
	}
];

export const AuthorsData = {
	authors: Authors
};
