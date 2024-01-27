import { Resolvers } from './graphql';

const resolvers: Resolvers = {
  Product: {
    __resolveReference: (reference) => {
      return {
        id: reference.id,
        title: `Product ${reference.id}`,
      };
    },
  },
};

export default resolvers;
