import MongoDBConnection from '@lib/db';
import Activity from '@models/activity';

const GetActivity = async (req, res) => {
    try {
        await MongoDBConnection();
        const activity = await Activity.create({
            name: req.body.name,
            location: req.body.location,
        });
        return res.status(200).send(activity);
    } catch (error) {
        return res.status(400).send({
            message: error.message,
            stack: error.errors,
        });
    }
};

export default GetActivity;
