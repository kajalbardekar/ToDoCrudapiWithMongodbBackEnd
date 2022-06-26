const express =require("express");
const mongoose=require("mongoose");
require("dotenv").config();
const cors=require("cors");
const app=express();
const routes=require("./routes/ToDoRoutes")



 app.use(express.json());
 app.use(cors());
 app.use(routes);



 
 
 mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifieldTopology:true
}).then(()=>console.log("Mongodb Connected..."))
.catch((err)=>console.log(err));

app.listen(5000,()=>{
    console.log('app listening on port 5000 !');
})