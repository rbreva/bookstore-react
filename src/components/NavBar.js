import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import user from '../images/user.svg';

function NavBar() {
  return (
    <NavMenu>
      <div>
        <NavLink to="/">Books</NavLink>
        <NavLink to="/categories">Categories</NavLink>
      </div>
      <img src={user} alt="user" />
    </NavMenu>
  );
}

const NavMenu = styled.nav`
  display: flex;
  width: 75%;
  justify-content: space-between;
  align-items: center;

  a {
    width: 3.688rem;
    height: 1rem;
    margin: 1rem 2.563rem 0 0;
    font-family: Montserrat;
    font-size: 0.813rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1.9px;
    color: var(--black-two);
    text-transform: uppercase;
    opacity: 0.5;
  }

  .active {
    opacity: 1;
  }

  img {
    width: 3rem;
    cursor: pointer;
  }
`;

export default NavBar;
