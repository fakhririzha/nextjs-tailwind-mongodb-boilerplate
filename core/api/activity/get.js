import MongoDBConnection from '@lib/db';
import Activity from '@models/activity';

const GetActivity = async (req, res) => {
    try {
        await MongoDBConnection();
        const activity = await Activity.find();

        return res.status(200).send(activity);
    } catch (error) {
        return res.status(500).send(error);
    }
};

export default GetActivity;
