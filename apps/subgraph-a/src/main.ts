import { ApolloServer } from 'apollo-server';
import schema from './app/schema';
import context from './app/context';

const server = new ApolloServer({ schema, context });

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || '0.0.0.0';
server.listen(PORT, HOSTNAME).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
