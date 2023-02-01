import express from 'express';
import userController from '../../controllers/userController.js';
const route = express.Router();

// route.get('/', (req, res) => {
//     res.status(200).send({ message: 'user home'})
// })
route.get('/', userController.getAll);

export default route;