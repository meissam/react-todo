import React from "react";
import ReactDOM from "react-dom";
import configStore from "./store/store";
import { Provider } from "react-redux";

import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";

const store = configStore();

const unsubscribe = store.subscribe(() => {
      const json = JSON.stringify(store.getState().notes);
      localStorage.setItem('notes', json);
});


  


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
