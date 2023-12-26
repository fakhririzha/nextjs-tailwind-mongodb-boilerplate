import GetActivity from '@api/activity/get';
import PostActivity from '@api/activity/post';

const handler = async (req, res) => {
    if (req.method === 'GET') {
        await GetActivity(req, res);
    } else if (req.method === 'POST') {
        await PostActivity(req, res);
    } else {
        res.status(405).end();
    }
};

export default handler;
