import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BooksView from './Pages/Books';
import Categories from './Pages/Categories';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<BooksView />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
