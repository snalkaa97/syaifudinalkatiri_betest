import express from 'express';
import userRoute from './user/index.js'
const route = express.Router();


route.get('/', (req, res) => {
    res.status(200).send({ message: 'OK' });
})
route.use('/user', userRoute);
export default route;