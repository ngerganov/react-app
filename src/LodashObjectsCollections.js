// src/LodashObjectsCollections.js
import React, { useEffect } from 'react';
import _ from 'lodash';

function LodashObjectsCollections() {
  useEffect(() => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };

    const assignedObj = _.assign({}, obj1, obj2);
    console.log('Объект после применения _.assign:', assignedObj);

    const originalObj = { a: 1, b: { c: 2 } };
    const clonedObj = _.cloneDeep(originalObj);
    console.log('Исходный объект:', originalObj);
    console.log('Копия объекта:', clonedObj);

    clonedObj.b.c = 3;
    console.log('Измененный клонированный объект:', clonedObj);
    console.log('Исходный объект после изменения клона:', originalObj);

    const users = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 25 },
      { name: 'David', age: 30 },
      { name: 'Eve', age: 35 }
    ];

    const groupedByAge = _.groupBy(users, 'age');
    console.log('Коллекция после применения _.groupBy:', groupedByAge);

    const sortedByName = _.sortBy(users, 'name');
    console.log('Коллекция после применения _.sortBy:', sortedByName);
  }, []);

  return (
    <div>
      <h3>Смотрите консоль для вывода результатов Lodash</h3>
    </div>
  );
}

export default LodashObjectsCollections;
