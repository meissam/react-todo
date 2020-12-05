import React from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { removeNote } from '../actions/notes';


const Item = (props) => {
  const { id, title, lastModified, tags } = props;

  return (
    <li>
      <Card>
        <Card.Body>
          <Card.Title>
            {id} - {title} - {lastModified}
          </Card.Title>
          <ul className="list-inline">
            {tags.map((tag, index) => (
              <li key={index} className="list-inline-item">
                #{tag}
              </li>
            ))}
          </ul>
          <button
            onClick={(e) => props.dispatch(removeNote(id))}
            className="btn btn-danger"
          >
            X
          </button>
        </Card.Body>
      </Card>
    </li>
  );
};



export default connect()(Item) ;
