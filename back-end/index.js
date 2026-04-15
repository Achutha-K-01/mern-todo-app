const express= require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const app = express();

const PORT =3000;
const MONGO_URI = "mongodb://localhost:27017/todo-app"

app.use(express.json());
app.use(cors());

function connectDB(url){
    try{
        mongoose.connect(url);
        console.log("Connected to Database")
    }
    catch{
        console.log("Error connecting Database");
    }
}

connectDB(MONGO_URI);

app.use("/api/tasks", require("./routes/tasksRoute"))

app.listen(PORT, ()=>{
    console.log("Server Listening on port: ", PORT)
})