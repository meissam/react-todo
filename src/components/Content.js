import React from "react";
import Items from './Items';
import Form from './Form'


const Content = (props) => {
  const {items, handleAddItem} = props;
  return (
    <>
      <Form hello="sag" handleAddItem={handleAddItem} />
      <Items items={items} />
    </>
  );
};

export default Content;
