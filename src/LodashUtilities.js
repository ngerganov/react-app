// src/LodashUtilities.js
import React, { useEffect } from 'react';
import _ from 'lodash';

function LodashUtilities() {
  useEffect(() => {
    const getUniqueValues = (array) => {
      return _.uniq(array);
    };

    const array = [1, 2, 2, 3, 4, 4, 5];
    const uniqueValues = getUniqueValues(array);
    console.log('Уникальные значения массива:', uniqueValues);

    const countFrequency = (array) => {
      return _.countBy(array);
    };

    const frequency = countFrequency(array);
    console.log('Частота значений в массиве:', frequency);

    const maxNumber = _.max(array);
    console.log('Максимальное значение в массиве:', maxNumber);

    const users = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 25 },
      { name: 'David', age: 30 },
      { name: 'Eve', age: 35 }
    ];

    const groupedByAge = _.groupBy(users, 'age');
    console.log('Пользователи, сгруппированные по возрасту:', groupedByAge);

    const sortedByName = _.sortBy(users, 'name');
    console.log('Пользователи, отсортированные по имени:', sortedByName);
  }, []);

  return (
    <div>
      <h3>Смотрите консоль для вывода результатов с Lodash</h3>
    </div>
  );
}

export default LodashUtilities;
