import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteBooks, deleteBookAPI } from '../Redux/Books/Books';
import progress from '../images/progress.svg';

function Book({ title, author, id }) {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(deleteBookAPI(id)).then(
      dispatch(deleteBooks(id)),
    );
  };
  return (
    <BookContainer>
      <BookDescription>
        <BookCategory>Category</BookCategory>
        <BookTitle>{title}</BookTitle>
        <BookAuthor>{author}</BookAuthor>
        <BookBtn>
          <li><button type="button">Comments</button></li>
          <li><button type="button" onClick={handleRemoveBook}>Remove</button></li>
          <li><button type="button">Edit</button></li>
        </BookBtn>
      </BookDescription>
      <BookProgress>
        <img src={progress} alt="progress" />
        <PercentData>
          <Percent>55%</Percent>
          <Completed>Completed</Completed>
        </PercentData>
      </BookProgress>
      <div>
        <CurrenChapter>Current Chapter</CurrenChapter>
        <Chapter>Chapter 12</Chapter>
        <ChapterBtn type="button">Update progress</ChapterBtn>
      </div>
    </BookContainer>
  );
}

const BookContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  padding: 2rem 1.6rem;
  border-radius: 4px;
  border: solid 1px #e8e8e8;
  background-color: #fff;
  display: grid;
  grid-template-columns: 4fr 2fr 2fr;;
`;

const BookDescription = styled.div`
  width: 100%;
`;

const BookCategory = styled.div`
  opacity: 0.5;
  font-family: Montserrat;
  font-size: 0.875rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--black-two);
  margin-bottom: 0.3rem;
`;

const BookTitle = styled.div`
  font-family: Roboto Slab;
  font-size: 1.375rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.2px;
  color: var(--black-two);
`;

const BookAuthor = styled.div`
  font-family: Roboto Slab;
  font-size: 0.875rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #4386bf;
  margin-bottom: 1rem;
`;

const BookBtn = styled.ul`
  display: flex;
  gap: 1rem;

  li {
    border-right: 1px solid #e8e8e8;
  }

  button {
    background-color: #fff;
    border: none;
    font-family: Roboto Slab;
    font-size: 0.875rem;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #4386bf;
    padding-right: 1rem;
    padding-left: 0;
  }
`;

const BookProgress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 4.5rem;
  }
`;

const PercentData = styled.div`
  border-right: 0.11rem solid #e8e8e8;
`;

const Percent = styled.div`
  margin: 0.063rem 5.75rem 0 0.688rem;
  font-family: Montserrat;
  font-size: 2rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--black-two);
`;

const Completed = styled.div`
  margin: 0.438rem 4.938rem 0.75rem 0.75rem;
  opacity: 0.5;
  font-family: Montserrat;
  font-size: 0.875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--black-two);
`;

const CurrenChapter = styled.div`
  opacity: 0.5;
  font-family: Roboto Slab;
  font-size: 0.813rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--black-two);
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

const Chapter = styled.div`
  font-family: Roboto Slab;
  font-size: 1rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.4px;
  color: var(--black-two);
  margin-bottom: 1.5rem;
`;

const ChapterBtn = styled.button`
  width: 11.5rem;
  height: 2.063rem;
  padding: 0.438rem 1.188rem 0.5rem 1.375rem;
  border-radius: 3px;
  background-color: var(--azure);
  border: none;
  font-family: Roboto Slab;
  font-size: 0.813rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.5px;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
`;

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
