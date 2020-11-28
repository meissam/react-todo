import React from 'react';
import Item from './Item';


const Items = (props) => {
    const {items} = props
    return(
        <ul className="todo-list list-unstyled">
            {items.map((item) => (
               <Item key={item.id} data={item} />
            ))}
          </ul>
    )

}

export default Items;