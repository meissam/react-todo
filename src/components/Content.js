import React from "react";
import Items from './Items';


const Content = (props) => {
  const {items, handleRemoveItem} = props;
  return (
    <>
      <Items items={items}  handleRemoveItem={handleRemoveItem}  />
    </>
  );
};

export default Content;
