/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-02 23:21:32
 * @LastEditTime: 2022-01-02 23:30:30
 * @LastEditors: Lewis
 */
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./root-reducer";
import mySaga from "./root-saga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(mySaga);

export {store} ;
