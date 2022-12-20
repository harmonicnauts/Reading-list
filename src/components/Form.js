import React, {useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ input, setInput, books, setBooks, editBook, setEditBook}) => {
    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    useEffect(() => {
        if (editBook) {
            setInput(editBook.title);
        } else {
            setInput('');
        }
    }, [setInput, editBook])


    const updateBook = (title, id, completed) => {
        const newBook = books.map((book) => 
            book.id === id ? {title, id, completed} : book
        );
        setBooks(newBook);
        setEditBook('');
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!editBook){
            setBooks([...books, { id: uuidv4(), title: input, completed: false }]);
            setInput("");
        }
        else {
            updateBook(input, editBook.id, editBook.completed)
        }
        
    };
    return (
        <form onSubmit={onFormSubmit}>
            <input type='text' placeholder='Enter a book name...' className='task-input' value={input} required onChange={onInputChange} />
            <button className='button-add' type='submit'>
                {editBook ? 'OK' : 'Add'}
            </button>
        </form>
    )
}

export default Form