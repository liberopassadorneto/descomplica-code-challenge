import Fastify from 'fastify'
import mercurius from 'mercurius'
import { codegenMercurius } from 'mercurius-codegen'
import { typeDefs } from './graphql/schema'
import { resolvers } from '@/infra/graphql/resolvers'

const app = Fastify()

app.register(mercurius, {
  schema: typeDefs,
  resolvers,
  graphiql: true,
})

codegenMercurius(app, {
  targetPath: './src/infra/graphql/generated.ts',
}).catch(console.error)

app.listen({ port: 3333 }).then(() => {
  console.log(`GraphQL server is running at http://localhost:3333`)
})
