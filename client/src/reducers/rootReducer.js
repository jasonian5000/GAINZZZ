import { combineReducers } from "redux"
import bodyPartReducer from "./bodyPartReducer";
import trainerReducers from "./trainerReducers";
import searchResultsReducer from "./searchResults";
import workoutReducer from "./workoutReducer";


const rootReducer = combineReducers({
    searchResults: searchResultsReducer,
    bodyPart: bodyPartReducer,
    workout: workoutReducer,
    trainers: trainerReducers
});

export default rootReducer