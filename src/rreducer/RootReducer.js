import { combineReducers } from "redux";
import CountReducer from "./CountReducer";
import UserReducer from "./UserReducer";
import ReviewReducer from "./ReviewReducer";

const rootReducer = combineReducers({

    counter: CountReducer,
    user: UserReducer,
    review: ReviewReducer,

})

export default rootReducer;