import { combineReducers } from "redux"
import bodyPartReducer from "./bodyPartReducer";
import ptReducer from "./ptReducer";
import searchResultsReducer from "./searchResults";
import workoutReducer from "./workoutReducer";


const rootReducer = combineReducers({
    searchResults: searchResultsReducer,
    bodyPart: bodyPartReducer,
    workout: workoutReducer,
    pt: ptReducer
});

export default rootReducer