import { buildSubgraphSchema } from '@apollo/subgraph';
import { gql } from 'apollo-server';
import { readFileSync } from 'fs';
import { join } from 'path';

import resolvers from './resolvers';

const schemaString = readFileSync(
  join(__dirname, './schema.graphql')
).toString();

const typeDefs = gql`
  ${schemaString}
`;

const schema = buildSubgraphSchema([{ typeDefs, resolvers }]);

export default schema;
