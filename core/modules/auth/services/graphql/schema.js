import { gql } from '@apollo/client';

export const registerUser = gql`
    mutation registerUser($name: String!, $email: String!, $password: String!) {
        registerUser(
            input: { name: $name, email: $email, password: $password }
        ) {
            name
            email
            password
        }
    }
`;
