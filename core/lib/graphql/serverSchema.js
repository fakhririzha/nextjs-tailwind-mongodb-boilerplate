import { makeExecutableSchema } from '@graphql-tools/schema';

import resolvers from '@lib/graphql/resolvers';
import typeDefs from '@lib/graphql/schemas';

const serverSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

export default serverSchema;
