import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Routes from "./App";
import * as serviceWorker from "./serviceWorker";
import GlobalStyle from "./styles";
import store from "./store";
import LogRocket from "logrocket";

LogRocket.init("wx0efx/infor-manager");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
