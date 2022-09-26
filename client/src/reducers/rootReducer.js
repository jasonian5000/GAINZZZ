import { combineReducers } from "redux"
import accountInformationReducer from "./accountInfoReducer";
import countReducer from "./countReducer";
import favoriteWorkoutsReducer from "./favoriteWorkoutsReducer";
import myWorkoutReducer from "./myWorkoutReducer";
import pageReducer from "./pageReducer";
import searchReducers from "./searchReducers";
import trainerReducers from "./trainerReducers";


const rootReducer = combineReducers({
    search: searchReducers,
    trainers: trainerReducers,
    personalInfo: accountInformationReducer,
    favoriteWorkouts: favoriteWorkoutsReducer,
    workout: myWorkoutReducer,
    LoadedPage: pageReducer,
    count:countReducer
});

export default rootReducer