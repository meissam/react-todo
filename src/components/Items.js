import React from "react";
import Item from "./Item";
import dayjs from "dayjs";

const Items = (props) => {
  const { items, handleRemoveItem } = props;
  return (
    <ul className="todo-list list-unstyled">
      {items
        .sort(function (a, b) {
          const date1 = dayjs(b.lastModified);
          const date2 = dayjs(a.lastModified);
          return date1.diff(date2);
        })
        .map((item) => (
          <Item key={item.id} data={item} handleRemoveItem={handleRemoveItem} />
        ))}
    </ul>
  );
};

export default Items;
