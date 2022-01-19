import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/reducerApp";
import thunk from "redux-thunk";
compose=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_|| compose;
const store = createStore(rootReducer,applyMiddleware(thunk));

export default store