import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs } from './schema/type-defs.js'
import { resolvers } from './schema/resolvers.js'

const server = new ApolloServer({ typeDefs, resolvers })

const { url } = await startStandaloneServer(server, { listen: { port: 3002 } })

console.log(`Server ready at ${url}`)
