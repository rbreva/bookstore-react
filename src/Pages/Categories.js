import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { checkStatus } from '../Redux/Categories/Categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const updateStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <CategoriesContent>
      <h2>{categories}</h2>
      <CategoriesBtn type="button" onClick={() => updateStatus()}>Check Status</CategoriesBtn>
    </CategoriesContent>
  );
};

const CategoriesContent = styled.div`
  padding: 2rem;
  text-align: center;
  font-family: Montserrat;
`;

const CategoriesBtn = styled.button`
  padding: 0.7rem 2rem;
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
  margin-top: 2rem;
`;

export default Categories;
