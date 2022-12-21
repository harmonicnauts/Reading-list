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
			setAuthorInput(editBook.author);
			setPublisherInput(editBook.publisher);
			setSummaryInput(editBook.summary);
		} else {
			setInput('');
      setAuthorInput('');
			setPublisherInput('');
			setSummaryInput('');
		} 
	}, [setInput, setAuthorInput, setPublisherInput, setSummaryInput,editBook])


	const updateBook = (title, id, author, publisher, summary , completed) => {
		const newBook = books.map((book) =>
			book.id === id ? { title, id, author, publisher, summary , completed } : book
		);
    console.log(newBook);
		setBooks(newBook);
		setEditBook('');
	}

	const onFormSubmit = (event) => {
		event.preventDefault();
		if (!editBook) {
			setBooks([...books, { id: uuidv4(), title: input, author: authorInput, publisher: publisherInput, summary: summaryInput ,completed: false }]);
			setInput("");
			setAuthorInput("");
			setPublisherInput("");
			setSummaryInput("");

		}
		else {
			updateBook(input, editBook.id, authorInput, publisherInput, summaryInput, editBook.completed)
		}

	};
	return (
		<form onSubmit={onFormSubmit}>
			<div>
				<input type='text' placeholder="Enter the book's name..." className='book-input' value={input} required onChange={onNameInputChange} />
			</div>
			<div>
				<input type='text' placeholder="Enter the book's author..." className='book-input' value={authorInput} onChange={onAuthorInputChange} />
			</div>
			<div>
				<input type='text' placeholder="Enter the book's publisher..." className='book-input' value={publisherInput} onChange={onPublisherInputChange} />
			</div>
      <div>
				<input type='text' placeholder="Enter the book's Summary..." className='summary-input' value={summaryInput} onChange={onSummaryInputChange} />
			</div>
			

			<button className='button-add' type='submit'>
				{editBook ? 'OK' : 'Add'}
			</button>
		</form>
	)
}

export default Form