import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import ReadingList from './components/ReadingList';

function App() {
  const initialState = JSON.parse(localStorage.getItem('books')) || [];
  const [input, setInput] = useState("");
  const [books, setBooks] = useState(initialState);
  const [editBook, setEditBook] = useState(null);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books])

  return (
  <div className='container'>
    <div className='app-wrapper'>
      <div>
        <Header/>
      </div>
      
      <div>
        <Form
          input = {input}
          setInput = {setInput}
          books = {books}
          setBooks = {setBooks}
          editBook = {editBook}
          setEditBook = {setEditBook}
        />
      </div>

      <div>
        <ReadingList 
        books = {books} 
        setBooks={setBooks}
        setEditBook = {setEditBook}
        />
      </div>
    </div>
  </div>
  );
}

export default App;
