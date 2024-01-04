import { getToken } from 'next-auth/jwt';

const handler = async (req, res) => {
    const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
        raw: true,
    });

    res.status(200).send({ token });
};

export default handler;
