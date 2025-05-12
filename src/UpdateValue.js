// src/UpdateValue.js
import React, { useContext } from 'react';
import { MyContext } from './MyContext';

function UpdateValue() {
  const { setValue } = useContext(MyContext);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} placeholder="Введите новое значение" />
    </div>
  );
}

export default UpdateValue;
