export const typeDefs = `#graphql
    type Exercise {
        bodyPart: String!
        equipment: String!
        gifUrl: String!
        id: ID!
        name: String!
        target: String!
    }

    type ExerciseList {
        exercises: [Exercise]!
        totalResults: Int!
    }

    type Query {
        # get a specific exercise by ID
        exercise(id: ID!): Exercise
        # get a list of all exercises
        exercises(page: Int, filter: FilterExercise): ExerciseList!
        # get a list of exercises selected by IDs
        exercisesByIds(ids: [ID!]!): [Exercise]!
    }

    input FilterExercise {
        bodyPart: String
        equipment: String
        name: String
        target: String
    }
`
