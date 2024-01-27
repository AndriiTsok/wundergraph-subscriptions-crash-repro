import { Resolvers } from './graphql';

const resolvers: Resolvers = {
  Customer: {
    __resolveReference: (reference) => {
      return {
        id: reference.id,
        name: `Customer ${reference.id}`,
      };
    },
  },
};

export default resolvers;
