import registerUser from '@lib/graphql/resolver/registerUser';
import getActivity from './resolver/getActivity';

const resolvers = {
    Query: {
        hello: () => 'world',
        getActivity,
    },
    Mutation: {
        registerUser,
    },
};

export default resolvers;
