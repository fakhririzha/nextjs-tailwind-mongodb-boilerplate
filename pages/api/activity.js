import GetActivity from '@api/activity/get';
import PostActivity from '@api/activity/post';

import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]';

export const config = {
    runtime: 'nodejs',
};

const handler = async (req, res) => {
    const session = await getServerSession(req, res, authOptions);

    if (!session) {
        res.status(401).json({ message: 'You must be logged in.' });
        return;
    }

    if (req.method === 'GET') {
        await GetActivity(req, res);
    } else if (req.method === 'POST') {
        await PostActivity(req, res);
    } else {
        res.status(405).end();
    }
};

export default handler;
