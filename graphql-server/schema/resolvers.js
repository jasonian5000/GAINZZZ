import { ExerciseList } from "../ExerciseList.js"

export const resolvers = {
    Query: {
        exercises(){
            return ExerciseList
        }
    }
}