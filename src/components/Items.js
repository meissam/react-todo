import React from 'react';
import Item from './Item';


const Items = (props) => {
    const {items, handleRemoveItem} = props
    return(
        <ul className="todo-list list-unstyled">
            {items.map((item) => (
               <Item key={item.id} data={item} handleRemoveItem={handleRemoveItem} />
            ))}
          </ul>
    )

}

export default Items;