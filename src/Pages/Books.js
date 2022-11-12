import React from 'react';
import styled from 'styled-components';
import Booklist from '../components/BookList';
import AddBookForm from '../components/AddBookForm';

function BooksView() {
  // return booklist and addbookform
  return (
    <BookContainer>
      <Booklist />
      <AddBookForm />
    </BookContainer>
  );
}

const BookContainer = styled.div`
  width: 100%;
  padding: 1.5rem 6.2rem;
`;

export default BooksView;
