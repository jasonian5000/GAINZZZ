import { combineReducers } from "redux"
import bodyPartReducer from "./bodyPartReducer";
import workoutReducer from "./workoutReducer";


const rootReducer = combineReducers({
    bodyPart: bodyPartReducer,
    workout: workoutReducer
});

export default rootReducer