import React from 'react'
import Collapsible from 'react-collapsible';


const ReadingList = ({ books, setBooks, setEditBook }) => {
  const handleDelete = ({ id }) => {
    setBooks(books.filter((book) => book.id !== id));
  }
  const handleComplete = (book) => {
    setBooks(
      books.map((item) => {
        if (item.id === book.id) {
          return { ...item, completed: !item.completed }
        }
        return item;
      })
    );
  }

  const handleEdit = ({ id }) => {
    const findBook = books.find((book) => book.id === id);
    setEditBook(findBook);
  }
  return (
    <div>
      {books.map((book) => (
        <li className='list-item' key={book.id}>
          <div><input type='text' value={book.title} className={`list ${book.completed ? "complete" : ""}`} onChange={(event) => event.preventDefault()} /></div>
          <div><input type='text' value={book.author} className={`list ${book.completed ? "complete" : ""}`} onChange={(event) => event.preventDefault()} /></div>
          <div><input type='text' value={book.publisher} className={`list ${book.completed ? "complete" : ""}`} onChange={(event) => event.preventDefault()} /></div>
          <div><input type='text' value={book.summary} className={`list ${book.completed ? "complete" : ""}`} onChange={(event) => event.preventDefault()} /></div>
          
          <div>
            <button className='button-complete task-button' onClick={() => handleComplete(book)}>
              <i className='fa fa-check-circle'></i>
            </button>
            <button className='button-edit task-button' onClick={() => handleEdit(book)}>
              <i className='fa fa-edit'></i>
            </button>
            <button className='button-delete task-button' onClick={() => handleDelete(book)}>
              <i className='fa fa-trash'></i>
            </button>
          </div>
          <br/>
          {/* <Collapsible className='collapsible' trigger="Start here">
              <p>
                This is the collapsible content. It can be any element or React
                component you like.
              </p>
              <p>
                It can even be another Collapsible component. Check out the next
                section!
              </p>
          </Collapsible> */}
        </li>
      ))}
    </div>
  )
}

export default ReadingList;