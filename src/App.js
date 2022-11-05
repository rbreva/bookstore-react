import React from 'react';
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <h1>Bookstore CMS</h1>
            <nav>
              <NavLink to="/">Books</NavLink>
              <NavLink to="/categories">Categories</NavLink>
            </nav>
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
