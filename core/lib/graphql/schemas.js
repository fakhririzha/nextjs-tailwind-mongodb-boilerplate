const typeDefs = `
    type Query {
        hello: String
    }

    type ActivityOutput {
        _id: String
        name: String
        location: String
        createdAt: String
        updatedAt: String
    }

    type Query {
        getActivity: [ActivityOutput]
    }

    type RegisterUserOutput {
        _id: String
        name: String
        email: String
        password: String
        createdAt: String
        updatedAt: String
    }

    input RegisterUserInput {
        name: String!
        email: String!
        password: String!
    }

    type Mutation {
        registerUser(input: RegisterUserInput): RegisterUserOutput
    }
`;

export default typeDefs;
