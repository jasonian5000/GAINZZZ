import { combineReducers } from "redux"
import accountInformationReducer from "./accountInfoReducer";
import favoriteWorkoutsReducer from "./favoriteWorkoutsReducer";
import searchReducers from "./searchReducers";
import trainerReducers from "./trainerReducers";


const rootReducer = combineReducers({
    search: searchReducers,
    trainers: trainerReducers,
    personalInfo: accountInformationReducer,
    favoriteWorkouts: favoriteWorkoutsReducer
});

export default rootReducer