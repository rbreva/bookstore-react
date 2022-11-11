import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../Redux/Categories/Categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const updateStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <>
      <h2>{categories}</h2>
      <div><button type="button" onClick={() => updateStatus()}>Check Status</button></div>
    </>
  );
};

export default Categories;
