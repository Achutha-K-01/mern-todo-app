const express = require("express");
const Tasks = require("../models/tasksModel")
const router = express.Router();

router.get("/", async(req,res)=>{
    const tasks = await Tasks.find();
    console.log(tasks)
    res.json(tasks)
});

router.post("/", async(req,res) => {
    const task = new Tasks(req.body);
    console.log(task);
    await task.save();
    res.json({data: task, status: 201, message: "Task added successfully"})
})

router.patch("/:id", async(req,res) => {
    console.log(req.params)
    try{
        const {id} = req.params;
        const updatedData = await Tasks.findByIdAndUpdate(id, {$set: req.body}, {new: true});

        if(!updatedData){
            return res.status(404).json({message: "task not found"})
        }
        res.status(200).json({message: "Task Status updated", data: updatedData})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.patch("/:id", async(req,res) => {
    console.log(req.body, req.params);
    try{
        const id = req.params;
        const updatedData = await Tasks.findByIdAndUpdate(id, {$set: req.body}, {new: true});

        if(!updatedData){
            return res.status(404).json({message: "task not found"})
        }
        res.send(200).json({message: "Task Data Updated", data: updatedData})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.delete("/:id", async(req,res) => {
    console.log("delete")
    const id = req.params.id;
    try{
        await Tasks.findByIdAndDelete(id);
        res.json({message: "Task deleted successfully"})
    }
    catch(error){
        res.json({message: error.message})
    }
})

module.exports = router;