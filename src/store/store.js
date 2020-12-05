import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";

let persistedState;
try {
  const notes = JSON.parse(localStorage.getItem("notes"));

  if (notes) {
    persistedState = {
      notes,
      filterTags: [],
    };
  }
} catch (e) {
  // Do nothing at all
}

const configStore = () => {
  const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};

export default configStore;
