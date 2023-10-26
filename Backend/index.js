const express=require('express');
const mongoose=require('mongoose');
const StudentRoute = require('./control/router');
const cors= require("cors");
const bodyParser= require("body-parser");
mongoose.connect("mongodb+srv://Drastic:Goodandevil@cluster0.gllxmog.mongodb.net/schooldb");
let db=mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error occured while connecting to db"));
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use("/student",StudentRoute);

app.listen(4000,()=>{
    console.log("Server Started at 4000");
})

