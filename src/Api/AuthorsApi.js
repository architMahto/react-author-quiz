import { AuthorsData } from './Authors';
import _ from 'lodash';

class AuthorsApi {
	static _clone(item) {
		return JSON.parse(JSON.stringify(item));
	}

	static addAuthor(author) {
		AuthorsData.authors.push(author);
	}

	static getAllBooks() {
		let authors = this.getAuthors();

		return authors.reduce((books, currentAuthor) => {
			return books.concat(currentAuthor.books);
		}, []);
	}

	static getAuthor(answer) {
		let authors = this.getAuthors();

		return authors.find(author => {
			return author.books.some(title => title === answer);
		});
	}

	static getAuthors() {
		return this._clone(AuthorsData.authors);
	}

	static getTurnData() {
		const allBooks = this.getAllBooks();
		const fourRandomBooks = _.shuffle(allBooks).slice(0, 4);
		const answer = _.sample(fourRandomBooks);

		return { books: fourRandomBooks, author: this.getAuthor(answer) }
	}
}

export default AuthorsApi;
