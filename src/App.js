import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import ReadingList from './components/ReadingList';

function App() {
  const initialState = JSON.parse(localStorage.getItem('books')) || [];
  const [input, setInput] = useState("");
  const [authorInput, setAuthorInput] = useState("");
  const [publisherinput, setPublisherInput] = useState("");
  const [summaryInput, setSummaryInput] = useState("");
  const [books, setBooks] = useState(initialState);
  const [editBook, setEditBook] = useState(null);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books])

  return (
    <div>
      <Header />
      <div className='container'>
        <div className='app-wrapper'>
          <div>
            <div className='title'>
              <h1>Book Form</h1>
            </div>
            <Form
              input={input}
              setInput={setInput}

              authorInput = {authorInput}
              setAuthorInput = {setAuthorInput}

              publisherInput = {publisherinput}
              setPublisherInput = {setPublisherInput}

              summaryInput = {summaryInput}
              setSummaryInput = {setSummaryInput}

              books={books}
              setBooks={setBooks}

              editBook={editBook}
              setEditBook={setEditBook}
            />
          </div>

        </div>
        <div className='app-wrapper'>
          <div>
            <div className='title'>
              <h1>Book List</h1>
            </div>
          </div>

          <div>
          <div>
            <ReadingList
              books={books}
              setBooks={setBooks}
              setEditBook={setEditBook}
            />
          </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
