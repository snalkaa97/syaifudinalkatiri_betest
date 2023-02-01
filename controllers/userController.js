import User from '../models/userModel.js'
import redis from 'redis';

let redisClient;

(async () => {
	redisClient = redis.createClient();

	redisClient.on("error", (error) => console.error(`Error : ${error}`));

	await redisClient.connect();
})();

export default {
    async getAll(req, res) {
        try{
            let isCached = false;
            const cachedData = JSON.parse(await redisClient.get("users:all"))
            const users = cachedData ?? await User.find();
            (cachedData) ? isCached = true : await redisClient.set("users:all", JSON.stringify(users));
            const result = {
                status: "success",
                title: 'get all users',
                isCached: isCached,
                count: users.length,
                data: users,
                errors:null
            }
            res.status(200).send(result);
        } catch(e){
            console.log(e);
            res.json({error: e});
        }
    }
}