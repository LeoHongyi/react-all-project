import { applyMiddleware, createStore } from "redux";
import createRootReducer from "./reducers";
import { createHashHistory } from 'history';
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

export const history = createHashHistory();
const store = createStore(createRootReducer(history), composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddleware)));

sagaMiddleware.run(rootSaga);
export default store;
