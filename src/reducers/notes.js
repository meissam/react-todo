const notesReducerDefaultState = [];

// eslint-disable-next-line import/no-anonymous-default-export
 const notesReducer = (state = notesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.note];
    case "REMOVE_NOTE":
      return state.filter((note) => note.id !== action.id);
    default:
      return state;
  }
};

export default notesReducer;