import {combineReducers} from 'redux';
import bookReducer from "./book.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({

        bookReducer,
        userReducer

})

export default rootReducer