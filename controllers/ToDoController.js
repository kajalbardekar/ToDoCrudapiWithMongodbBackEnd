const ToDoModel=require("../models/ToDoModel");
module.exports.getToDo= async (req,res)=>{
    const ToDo= await ToDoModel.find();
    res.send(ToDo);
}


module.exports.saveToDo= async (req,res)=>{
    const {text}=req.body;
    ToDoModel.create({text})
    .then(()=>res.set(201).send("Added Succesfully "))
    .catch(err=>console.log(err))
}


module.exports.deleteToDo=(req,res)=>{
    const {_id}=(req.body)
    ToDOModel.findByidAndDelete(_id)
    .then(()=>res.set(201).send("Deleted Succesfully "))
    .catch(err=>console.log(err))
 }


 module.exports.UpdateToDo=(req,res)=>{
    const {_id,text}=(req.body)
    ToDOModel.findByidAndDelete(_id,{text})
    .then(()=>res.set(201).send("Updated Succesfully "))
    .catch(err=>console.log(err))
 }