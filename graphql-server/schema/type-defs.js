
export const typeDefs = `#graphql
    type Exercise {
        bodyPart: String!
        equipment: String!
        gifUrl: String!
        id: ID!
        name: String!
        target: String!
    }

    type Query {
        exercises: [Exercise!]!
    }
`
