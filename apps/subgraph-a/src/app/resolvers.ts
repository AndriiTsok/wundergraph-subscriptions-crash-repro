import { Resolvers } from './graphql';

const resolvers: Resolvers = {
  Product: (representation) => {
    return {
      id: representation.id,
      name: `Product ${representation.id}`,
    };
  },
};

export default resolvers;
