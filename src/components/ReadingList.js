import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




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
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{book.title}</Typography>

            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {book.author}
              </Typography>

              <Typography>
                {book.publisher}
              </Typography>

              <Typography>
                {book.summary}
              </Typography>
              <div className='button-group'>
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
            </AccordionDetails>

          </Accordion>
          
        </div>

      ))}
    </div>
  )
}

export default ReadingList;