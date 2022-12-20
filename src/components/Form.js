import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ input, setInput, authorInput, setAuthorInput, publisherInput, setPublisherInput, summaryInput, setSummaryInput, books, setBooks, editBook, setEditBook }) => {
	const onNameInputChange = (event) => {
		setInput(event.target.value);
	};
	const onAuthorInputChange = (event) => {
		setAuthorInput(event.target.value);
	};
	const onPublisherInputChange = (event) => {
		setPublisherInput(event.target.value);
	};
	const onSummaryInputChange = (event) => {
		setSummaryInput(event.target.value);
	};

	useEffect(() => {
		if (editBook) {
			setInput(editBook.title);
		} else {
			setInput('');
		}
	}, [setInput, editBook])


	const updateBook = (title, id, author, publisher, summary , completed) => {
		const newBook = books.map((book) =>
			book.id === id ? { title, id, author, publisher, summary , completed } : book
		);
		setBooks(newBook);
		setEditBook('');
	}

	const onFormSubmit = (event) => {
		event.preventDefault();
		if (!editBook) {
			setBooks([...books, { id: uuidv4(), title: input, author: authorInput, publisher: publisherInput, summary: summaryInput ,completed: false }]);
			setInput("");
			setAuthorInput('');
			setPublisherInput('');
			setSummaryInput("");
		}
		else {
			updateBook(input, editBook.author, editBook.publisher, editBook.summary, editBook.id, editBook.completed)
		}

	};
	return (
		<form onSubmit={onFormSubmit}>
			<div>
				<input type='text' placeholder="Enter a book name..." className='book-input' value={input} required onChange={onNameInputChange} />
			</div>
			<div>
				<input type='text' placeholder="Enter the book's author..." className='book-input' value={authorInput} required onChange={onAuthorInputChange} />
			</div>
			<div>
				<input type='text' placeholder="Enter the book's publisher..." className='book-input' value={publisherInput} required onChange={onPublisherInputChange} />
			</div>
      <div>
				<input type='text' placeholder="Enter the book's Summary..." className='book-input' value={summaryInput} required onChange={onSummaryInputChange} />
			</div>

			<button className='button-add' type='submit'>
				{editBook ? 'OK' : 'Add'}
			</button>
		</form>
	)
}

export default Form