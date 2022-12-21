import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BsCheck2All } from 'react-icons/bs';
import { FiEdit3 } from 'react-icons/fi';
import { MdDeleteOutline } from 'react-icons/md';




const ReadingList = ({ books, setBooks, setEditBook }) => {
  const handleDelete = ({ id }) => {
    setBooks(books.filter((book) => book.id !== id));
    // console.log(JSON.stringify(books));
    // console.log(JSON.stringify());
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
        <div key={book.id}>
          <Accordion className={`${book.completed ? "complete" : ""}`} sx={{ backgroundColor: "#f1af71" }} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography><strong>{book.title}</strong></Typography>

            </AccordionSummary>
            <AccordionDetails>
              <h1 className='content-text'>{book.title}</h1>

              <Typography>
                <strong className='content-text p-text'>Penulis</strong> : {book.author}
              </Typography>

              <Typography>
                <strong className='content-text p-text'>Penerbit</strong> :  {book.publisher}
              </Typography>
                <h2 className='content-text p-text'>Sinopsis</h2>
                <div className='boxed'>
                  <div className='content-text p-text'>{book.summary}</div>
                </div>
              <div className='button-group'>
                <button className='button-complete task-button' onClick={() => handleComplete(book)}>
                  <BsCheck2All />
                </button>
                <button className='button-edit task-button' onClick={() => handleEdit(book)}>
                  <FiEdit3 />
                </button>
                <button className='button-delete task-button' onClick={() => handleDelete(book)}>
                  <MdDeleteOutline />
                </button>
              </div>
            </AccordionDetails>

          </Accordion>
        </div>

      ))}
    </div>
  )
}

export default ReadingList;