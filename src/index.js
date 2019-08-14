import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import { featuresReducer } from "./reducers/featuresReducer";

import "bulma/css/bulma.css";
import "./styles.scss";

export const store = createStore(featuresReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
