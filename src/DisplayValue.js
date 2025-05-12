// src/DisplayValue.js
import React, { useContext } from 'react';
import { MyContext } from './MyContext';

function DisplayValue() {
  const { value } = useContext(MyContext);

  return <p>Значение из контекста: {value}</p>;
}

export default DisplayValue;
