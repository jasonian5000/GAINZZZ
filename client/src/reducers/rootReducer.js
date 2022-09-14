import { combineReducers } from "redux"
import accountInformationReducer from "./accountInfoReducer";
import searchReducers from "./searchReducers";
import trainerReducers from "./trainerReducers";


const rootReducer = combineReducers({
    search: searchReducers,
    trainers: trainerReducers,
    personalInfo: accountInformationReducer
});

export default rootReducer