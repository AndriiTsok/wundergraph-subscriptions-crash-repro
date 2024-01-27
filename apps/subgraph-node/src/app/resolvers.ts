import { Resolvers } from './graphql';

const resolvers: Resolvers = {
  Query: {
    node: (parent, args) => {
      switch (args.id.split(':')[0]) {
        case 'Product':
          return {
            id: args.id,
            __typename: 'Product',
          };
        case 'Customer':
          return {
            id: args.id,
            __typename: 'Customer',
          };
        default:
          return null;
      }
    },
  },
};

export default resolvers;
