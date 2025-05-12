import React from 'react';

const ListItem = React.memo(({ item }) => {
  console.log('Рендеринг ListItem', item);
  return <li>{item}</li>;
});

const ItemListWithMemo = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default ItemListWithMemo;