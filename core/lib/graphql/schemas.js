const typeDefs = `
    type Query {
        hello: String
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
