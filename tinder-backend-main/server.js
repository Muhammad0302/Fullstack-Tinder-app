import express from 'express';
import mongoose from 'mongoose'
import Cards from './dbCards.js'
import cors from 'cors'
// app config
 
 const app = express()
 const port = process.env.PORT || 8001

// middleware config

 app.use(express.json())
 app.use(cors())
 // DB config

mongoose.connect('mongodb://127.0.0.1:27017/tinder-clone',{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex: true
})

// Api endpoints

app.get('/',(req,res)=>res.status(200).send("Clever programmer is amazing communites on the playnet"))

app.post('/tinder/cards',(req,res)=>{
    const databasebcards = req.body;
    Cards.create(databasebcards,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/cards',(req,res)=>{
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})


// listner

app.listen(port,()=>console.log(`Listning on localhost ${port}`))