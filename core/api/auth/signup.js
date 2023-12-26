import { hashPassword } from '@lib/auth';
import MongoDBConnection from '@lib/db';

import User from '@models/user';

const Signup = async (req, res) => {
    try {
        await MongoDBConnection();

        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).send({
                message: 'Missing required fields',
            });
        }

        const hashedPassword = await hashPassword(password);

        const findExistingEmail = await User.find({ email });

        if (findExistingEmail.length > 0) {
            return res.status(400).send({
                message: 'Email already exists',
            });
        }

        const insertUser = await User.create({
            name,
            email,
            password: hashedPassword,
        });
        return res.status(200).send(insertUser);
    } catch (error) {
        console.log('error', error);
        return res.status(400).send({
            message: error.message,
            stack: error.errors,
        });
    }
};

export default Signup;
