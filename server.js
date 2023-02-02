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
    //MONGODB LOCAL
    // await mongoose.connect('mongodb://localhost:27017/ms-syaifudinalkatiri-betest',{
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    // })
    await mongoose.connect('mongodb+srv://alka:root@cluster0.f7k69ku.mongodb.net/?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}
main().catch(err => console.log(err));
app.use(router);
app.listen(process.env.NODE_PORT, ()=>{
    console.log(`running on port ${process.env.NODE_PORT}`);
})