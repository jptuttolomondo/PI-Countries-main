// import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from "../reducers/reducerApp";
// import thunk from "redux-thunk";

// const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose
// const store = createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))

// export default store

import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { ReducerTotal } from '../reducer/Reducer';

    
 const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

    export const store = createStore(
        ReducerTotal,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    )