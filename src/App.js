import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import NavBar from './components/NavBar';

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <h1>Bookstore CMS</h1>
            <NavBar />
          </header>
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <Books />
                   }
              />
              <Route
                path="/categories"
                element={
                  <Categories />
              }
              />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
