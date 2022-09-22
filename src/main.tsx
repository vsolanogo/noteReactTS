import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { App } from "./components/App";
import { store } from "./store/store";
import { GlobalComponent } from "./components/GlobalComponent";

ReactDOM.render(
  <Provider store={store}>
    <GlobalComponent />
    <App />
  </Provider>,
  document.getElementById("root")
);
