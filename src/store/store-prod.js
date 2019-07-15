import {createStore} from "redux";
import {applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "../reducers";


const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;


