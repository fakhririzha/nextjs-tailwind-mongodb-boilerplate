import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import * as schema from './schema';

export const gqlGetActivity = () => useLazyQuery(schema.getActivity);
