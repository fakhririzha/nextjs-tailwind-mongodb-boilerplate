import MongoDBConnection from '@lib/db';
import User from '@models/user';

const Login = async (req, res) => {
    try {
        await MongoDBConnection();

        const user = await User.findOne({
            email: req.body.email,
        });

        return res.status(200).send(activities);
    } catch (error) {
        return res.status(400).send({
            message: error.message,
            stack: error.errors,
        });
    }
};

export default Login;
