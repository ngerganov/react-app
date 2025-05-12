// src/CurrentDateTime.js
import React from 'react';

function CurrentDateTime() {
  const now = new Date().toLocaleString();
  return <p>Текущие дата и время: {now}</p>;
}

export default CurrentDateTime;
