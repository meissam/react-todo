import React from "react";
import { connect } from "react-redux";
import dayjs from "dayjs";
import Item from "./Item";
import filteredNotes from "../selectors/notes";

const Items = (props) => {
  return (
    <ul className="todo-list list-unstyled">
      {props.notes
        .sort(function (a, b) {
          const date1 = dayjs(b.lastModified);
          const date2 = dayjs(a.lastModified);
          return date1.diff(date2);
        })
        .map((note) => (
          <Item key={note.id} {...note} />
        ))}
    </ul>
  );
};

const mapPropsToState = (state) => ({
  notes: filteredNotes(state.notes, state.filterTags),
});

export default connect(mapPropsToState)(Items);
