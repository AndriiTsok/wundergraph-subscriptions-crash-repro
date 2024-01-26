import { Context } from './models';
import { GraphQLError } from 'graphql';

export default async ({ req }: { req: Request }): Promise<Context> => {
  const subject = (req.headers['x-subject'] as string) ?? 'user';
  if (!subject) {
    throw new GraphQLError('User is not authenticated', {
      extensions: {
        code: 'UNAUTHENTICATED',
        http: { status: 401 },
      },
    });
  }

  return {
    subject,
  };
};
