import { ApolloServer } from 'apollo-server';
import schema from './app/schema';
import context from './app/context';

const server = new ApolloServer({ schema, context });

const PORT = process.env.PORT || 3000;
server.listen(PORT).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
