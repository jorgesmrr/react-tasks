import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import "@bit/jorgemoreira.headless.styles";
import "./styles/main.output.css";
import "./styles/fontawesome-free-5.13.1-web/css/all.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
