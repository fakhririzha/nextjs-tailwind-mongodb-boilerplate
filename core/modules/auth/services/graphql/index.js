import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import * as schema from './schema';

export const gqlRegisterUser = (values) =>
    useMutation(schema.registerUser, { variables: values });
