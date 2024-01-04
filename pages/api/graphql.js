import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';

import { stitchSchemas } from '@graphql-tools/stitch';

import serverSchema from '@lib/graphql/serverSchema';
import allowCors from '@lib/graphql/utils/allowCors';

const createApolloServer = () => {
    const combinedSchema = stitchSchemas({
        subschemas: [serverSchema],
    });

    return new ApolloServer({
        schema: combinedSchema,
    });
};

const graphQLServer = async (req, res) => {
    const apolloServer = createApolloServer();

    const handler = startServerAndCreateNextHandler(apolloServer, {
        context: async (request, response) => ({ req: request, res: response }),
    });

    return handler(req, res);
};

export default allowCors(graphQLServer);
