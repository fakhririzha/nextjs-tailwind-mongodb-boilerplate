import { gql } from '@apollo/client';

export const getActivity = gql`
    query getActivity {
        getActivity {
            _id
            name
            location
            createdAt
            updatedAt
        }
    }
`;
