import { combineReducers } from "redux"
import acctInfoReducer from "./acctInfoReducer";
import countReducer from "./countReducer";
import favoriteWorkoutsReducer from "./favoriteWorkoutsReducer";
import myWorkoutReducer from "./myWorkoutReducer";
import pageReducer from "./pageReducer";
import searchReducers from "./searchReducers";
import trainerReducers from "./trainerReducers";


const rootReducer = combineReducers({
    search: searchReducers,
    trainers: trainerReducers,
    acctInfo: acctInfoReducer,
    favoriteWorkouts: favoriteWorkoutsReducer,
    workout: myWorkoutReducer,
    LoadedPage: pageReducer,
    count:countReducer
});

export default rootReducer