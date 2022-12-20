import React from 'react'

const ReadingList = ({books, setBooks, setEditBook}) => {
    const handleDelete = ({id}) => {
        setBooks(books.filter((book) => book.id !== id));
    }
    const handleComplete = (book) => {
        setBooks(
            books.map((item) => {
                if (item.id === book.id){
                    return{...item, completed: !item.completed}
                }
                return item;
            })
        );
    }

    const handleEdit = ({id}) => {
        const findBook = books.find((book) => book.id === id);
        setEditBook(findBook);
    }
  return (
    <div>
        {books.map((book) => (
            <li className='list-item' key={book.id}>
                <input type='text' value={book.title} className={`list ${book.completed ? "complete" : ""}`} onChange={(event)=> event.preventDefault()}/>
                <div>
                    <button className='button-complete task-button'onClick={() => handleComplete(book)}>
                        <i className='fa fa-check-circle'></i>
                    </button>
                    <button className='button-edit task-button' onClick={() => handleEdit(book)}>
                        <i className='fa fa-edit'></i>
                    </button>
                    <button className='button-delete task-button' onClick={() => handleDelete(book)}>
                        <i className='fa fa-trash'></i>
                    </button>
                </div>
            </li>
        ))}
    </div>
  )
}

export default ReadingList;