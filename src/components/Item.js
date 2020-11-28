import React from 'react';
import { Card } from "react-bootstrap";


const Item = (props) => {
    const {data} = props;
    return(

     <li>
        <Card>
        <Card.Body>
            <Card.Title> {data.title}</Card.Title>
                <ul className="list-inline">
                    {
                        data.tags.map((tag, index)=> <li key={index} className="list-inline-item">#{tag}</li>)
                    }
                </ul>
        </Card.Body>
        </Card>
    </li>

    )

}

export default Item;