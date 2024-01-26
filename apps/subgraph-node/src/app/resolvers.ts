import { Resolvers } from './graphql';

const resolvers: Resolvers = {
  Query: {
    node: (parent, args) => {
      return {
        id: args.id,
        __typename: 'Customer',
      };
    },
  },
};

export default resolvers;
