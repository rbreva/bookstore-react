import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import BooksView from './Pages/Books';
import { getBooks } from './Redux/Books/Books';
import Categories from './Pages/Categories';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <BookstoreCMS>
      <Panelbg>
        <Header />
        <Routes>
          <Route path="/" element={<BooksView />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Panelbg>
    </BookstoreCMS>
  );
}

const BookstoreCMS = styled.div`
  width: 100%;
  padding: 7rem 6.25rem;
  display: flex;
  justify-content: center;
`;

const Panelbg = styled.div`
  width: 87.5rem;
  margin: 0 2.5rem 4.063rem 0;
  padding: 0 0 4rem;
  border-radius: 4px;
  box-shadow: 0 0 60px 0 var(--black-5);
  background-color: var(--fff);
`;

export default App;
