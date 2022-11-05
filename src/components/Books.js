import React, { useState } from 'react';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => {
  const [books, setBooks] = useState([
    { title: 'The Hunger Games', author: 'Suzanne Collins' },
    { title: 'Dune', author: 'Frank Herbert' },
    { title: 'Capital in the Twenty-First Century', author: 'Suzanne Collins' },
  ]);

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.toString()}
          title={book.title}
          author={book.author}
        />
      ))}
      <AddBook books={books} setBooks={setBooks} />
    </div>
  );
};

export default Books;
