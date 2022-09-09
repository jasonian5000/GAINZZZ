import { combineReducers } from "redux"
import bodyPartReducer from "./bodyPartReducer";
import searchResultsReducer from "./searchResults";
import workoutReducer from "./workoutReducer";


const rootReducer = combineReducers({
    searchResults: searchResultsReducer,
    bodyPart: bodyPartReducer,
    workout: workoutReducer
});

export default rootReducer