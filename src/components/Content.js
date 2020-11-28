import React from "react";
import Items from './Items';
import Form from './Form'


const Content = (props) => {
  const {items, handleAddItem, handleRemoveItem} = props;
  return (
    <>
      <Form hello="sag" handleAddItem={handleAddItem} />
      <Items items={items}  handleRemoveItem={handleRemoveItem}  />
    </>
  );
};

export default Content;
