import { createStore } from "redux";
import CountReducer from "../rreducer/CountReducer";



let store = createStore(CountReducer)

export default store