import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import {createStore,applyMiddleware} from 'redux'
import promiseMiddleware from "redux-promise";
import ThunkMiddleware  from "redux-thunk";

import {BrowserRouter} from 'react-router-dom';
import Routes from "./routes";
import rootReducer  from './reducers/root.reducer';

const createStoreWithMiddleWare = applyMiddleware(promiseMiddleware,ThunkMiddleware)(createStore);

const store = createStoreWithMiddleWare(rootReducer);

const App = () => {

    return(
        <Provider store={store}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </Provider>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));


