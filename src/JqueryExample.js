// src/JqueryExample.js
import React, { useEffect } from 'react';
import $ from 'jquery';

function JqueryExample() {
  useEffect(() => {
    $('#id-selector').css('color', 'blue');

    $('.class-selector').css('font-weight', 'bold');

    $('p').css('font-style', 'italic');

    $('input[name="name-selector"]').val('Введено с jQuery');

    $('#combined-selector li:nth-child(odd)').css('background-color', '#f0f0f0');
  }, []);

  return (
    <div>
      <h3 id="id-selector">Это текст с использованием селектора по ID</h3>
      <p className="class-selector">Это текст с использованием селектора по классу</p>
      <p>Это абзац с использованием селектора по тегу</p>
      <input type="text" name="name-selector" />
      <ul id="combined-selector">
        <li>Элемент 1</li>
        <li>Элемент 2</li>
        <li>Элемент 3</li>
        <li>Элемент 4</li>
      </ul>
    </div>
  );
}

export default JqueryExample;
