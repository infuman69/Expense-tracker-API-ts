import express  from 'express'
import mongoose from 'mongoose';
const dotenv = require('dotenv')
const app = express();


dotenv.config()

const db = process.env.DATABASE!.replace('<PASSWORD>',process.env.PASSWORD!)
// console.log(db)
mongoose.set('strictQuery', false);
mongoose.connect(db)
.then(con =>{
    console.log('Connection was successful')
})
.catch(err => {
    console.log(err)
})


app.get("/",(req,res) => {
    res.send("hello")
})

const port = 3000
app.listen(process.env.PORT,() => {
    console.log("server started")
})