/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-12-14 23:07:08
 * @LastEditTime: 2022-01-24 22:51:50
 * @LastEditors: Lewis
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./views/App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
