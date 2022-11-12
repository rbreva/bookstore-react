import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { postBook, addBooks } from '../Redux/Books/Books';

function AddBookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();
  const submitHandler = (event) => {
    event.preventDefault();
    const id = uuidv4();
    const book = {
      id,
      title,
      author,
      category: 'ND',
    };
    dispatch(postBook(book)).then(
      () => dispatch(addBooks(book)),
    );
    setTitle('');
    setAuthor('');
  };

  const authorStateHandler = (event) => {
    setAuthor(event.target.value);
  };

  const titleStateHandler = (event) => {
    setTitle(event.target.value);
  };

  return (
    <NewBook>
      <NewBookH2>ADD NEW BOOK</NewBookH2>
      <FormNewBook onSubmit={submitHandler}>
        <BookTitle type="text" name="title" placeholder="Book title" id="title" value={title} onChange={titleStateHandler} required />
        <BookAuthor type="text" name="author" placeholder="Author" id="author" value={author} onChange={authorStateHandler} required />
        <NewBookBtn type="submit">Add Book</NewBookBtn>
      </FormNewBook>
    </NewBook>
  );
}

const NewBook = styled.div`
  border-top: 1px solid #e8e8e8;
  margin-top: 2.5rem;
  padding-top: 2.5rem;
`;

const NewBookH2 = styled.h2`
  font-family: Montserrat;
  font-size: 1.25rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.18px;
  color: #888;
  margin-bottom: 1.5rem;
`;

const FormNewBook = styled.form`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const BookTitle = styled.input`
  width: 50%;
  padding: 0.7rem;
  border: 1px solid #e8e8e8;
  border-radius: 4px;

  &::placeholder {
    font-family: Montserrat;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.15px;
    color: var(--very-light-pink);
  }
`;

const BookAuthor = styled.input`
  width: 25%;
  padding: 0.7rem;
  border: 1px solid #e8e8e8;
  border-radius: 4px;

  &::placeholder {
    font-family: Montserrat;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.15px;
    color: var(--very-light-pink);
`;

const NewBookBtn = styled.button`
  width: 25%;
  padding: 0.7rem;
  border-radius: 3px;
  background-color: var(--azure);
  border: none;
  font-family: Roboto Slab;
  font-size: 0.813rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.5px;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
`;

export default AddBookForm;
