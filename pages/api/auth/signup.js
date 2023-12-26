import Signup from '@api/auth/signup';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        await Signup(req, res);
    } else {
        res.status(405).end();
    }
};

export default handler;
