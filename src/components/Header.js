import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';

function Header() {
  return (
    <Panelbg>
      <BookstoreH1>Bookstore CMS</BookstoreH1>
      <NavBar />
    </Panelbg>
  );
}

const Panelbg = styled.header`
  width: 87.5rem;
  height: 5.938rem;
  margin: 0 0 1rem;
  padding: 1.5rem 6.2rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  border-bottom: solid 2px #e8e8e8;
`;

const BookstoreH1 = styled.h1`
  width: 15rem;
  height: 2.313rem;
  margin: 0.3rem 2.938rem 0.3rem 0;
  font-family: Montserrat;
  font-size: 1.875rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--azure);
`;

export default Header;
