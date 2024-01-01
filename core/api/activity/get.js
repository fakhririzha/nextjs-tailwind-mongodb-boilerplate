import MongoDBConnection from '@lib/db';
import Activity from '@models/activity';

const GetActivity = async (req, res) => {
    try {
        await MongoDBConnection();
        const activities = await Activity.find();

        res.setHeader('Cache-Control', 'public, s-maxage=1');

        return res.status(200).send(activities);
    } catch (error) {
        return res.status(500).send(error);
    }
};

export default GetActivity;
