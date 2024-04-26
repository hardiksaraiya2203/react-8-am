import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import userReducer from "./userReducer";
import Myreducer from "./Myreducer";

const rootReducer =combineReducers({

    counter : counterReducer,
    user:userReducer,
    myuser:Myreducer

})

export default rootReducer;