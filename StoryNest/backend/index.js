import express, { response } from "express";
import { PORT ,mongoURL } from "./config.js";
import { request} from "http";
import mongoose from "mongoose";


const app = express();

app.get('/',(request,response)=>{
    return response.status(200).send("Welcome!");
})


app.listen(PORT,()=>{
    console.log(`App is listening to port ${PORT}`);
});


app.use(express.json())

app.post('/books',async(request,response)=>{
    try{
        if(
            !request.body.title || !request.body.author||!request.body.PublishYear
        ){
return response.status(500).send({ message:"Please Submit all fields"});
        }

        const NewBook = {
            title:request.body.title,
            author:request.body.author,
            PublishYear:request.body.PublishYear,
        }
    }catch(error){
        console.log(error);
        response.status(500).send({message:error.message});
    }
});



mongoose.connect(mongoURL).then(()=>{
    console.log("App is connected to DataBase");
}).catch((error)=>{
    console.log(error);
})


