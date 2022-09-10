import { combineReducers } from "redux"
import searchReducers from "./searchReducers";
import trainerReducers from "./trainerReducers";


const rootReducer = combineReducers({
    search: searchReducers,
    trainers: trainerReducers
});

export default rootReducer