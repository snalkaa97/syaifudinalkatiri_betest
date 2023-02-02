import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import router from './routes/index.js'
import dotenv from 'dotenv'
// import redis from 'redis'
dotenv.config()


const app = express();
app.use(express.json());
app.use(cors())
app.use(
    express.urlencoded({
        extended: true,
    })
)
mongoose.set('strictQuery', true);
const main = async () => {
    await mongoose.connect('mongodb://localhost:27017/ms-alkatiri-betest',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}
main().catch(err => console.log(err));
app.use(router);
app.listen(process.env.NODE_PORT, ()=>{
    console.log(`running on port ${process.env.NODE_PORT}`);
})