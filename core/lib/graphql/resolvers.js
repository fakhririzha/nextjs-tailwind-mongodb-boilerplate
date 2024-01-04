import registerUser from '@lib/graphql/resolver/registerUser';

const resolvers = {
    Query: {
        hello: () => 'world',
    },
    Mutation: {
        registerUser,
    },
};

export default resolvers;
