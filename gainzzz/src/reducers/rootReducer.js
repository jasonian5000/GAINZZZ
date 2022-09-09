import { combineReducers } from "redux"
import bodyPartReducer from "./bodyPartReducer";
import ptReducer from "./ptReducer";
import workoutReducer from "./workoutReducer";


const rootReducer = combineReducers({
    bodyPart: bodyPartReducer,
    workout: workoutReducer,
    pt: ptReducer
});

export default rootReducer