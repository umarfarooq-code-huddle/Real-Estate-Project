import express from 'express';
import 'dotenv/config'
import listings from './routes/listings.route.js';
import users from './routes/users.route.js';
import mongoose from 'mongoose';
import cors from 'cors';

const uri = `mongodb+srv://umarfarooq:${process.env.PASSWORD}@realestate.tgyqwss.mongodb.net/RealEstate?retryWrites=true&w=majority`
mongoose.connect(uri);
const app = express();

app.use(cors())
app.use(express.json())
app.use('/listings',listings);
app.use('/users',users);

function custom(req,res){
    console.log(req)
}

app.use((error,req,res,next)=>{
    console.error(error)
    res.status(500).send('Internal Server Error');
  
})


app.get('/',(req,res)=>{
    return res.send('Welcome to The HomePage');
})


app.listen(process.env.PORT , ()=>{

    console.log(`Application Started on Port ${process.env.PORT}`);
})

