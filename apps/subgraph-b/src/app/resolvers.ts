import { Resolvers } from './graphql';

const resolvers: Resolvers = {
  Customer: (representation) => {
    return {
      id: representation.id,
      name: `Customer ${representation.id}`,
    };
  },
};

export default resolvers;
