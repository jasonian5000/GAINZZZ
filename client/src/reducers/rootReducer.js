import { combineReducers } from "redux"
import accountInformationReducer from "./accountInfoReducer";
import favoriteWorkoutsReducer from "./favoriteWorkoutsReducer";
import pageReducer from "./pageReducer";
import searchReducers from "./searchReducers";
import trainerReducers from "./trainerReducers";


const rootReducer = combineReducers({
    search: searchReducers,
    trainers: trainerReducers,
    personalInfo: accountInformationReducer,
    favoriteWorkouts: favoriteWorkoutsReducer,
    LoadedPage:pageReducer
});

export default rootReducer