import { combineReducers, createStore } from "redux";
import CountReducer from "../rreducer/CountReducer";
import rootReducer from "../rreducer/RootReducer";
// import ReviewReducer from "../rreducer/ReviewReducer";



// let store = createStore(CountReducer)
let store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store