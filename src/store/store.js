import { createStoreHook } from "react-redux";
import { createStore } from "redux";
import counterReducer from "../reducer/counterReducer";
import rootReducer from "../reducer/rootReducer";

const store = createStore(rootReducer)

export default store;
