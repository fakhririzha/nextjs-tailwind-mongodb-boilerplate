import Login from '@api/auth/login';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        await Login(req, res);
    } else {
        res.status(405).end();
    }
};

export default handler;
