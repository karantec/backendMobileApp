const express=require('express');
const app=express();
const Job=require('./database')
const cors = require("cors");
const PORT=8000;
app.use(cors());
app.use(express.json());
//home rute




app.get("/",(req,res)=>{
    res.send("hello world");
})
//create route
app.post("/createjob", async (req, res) => {
    try {
        const data = new Job(req.body);
        const save = await data.save();
        console.log("Added data");
        res.send(save);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// Read data
app.get("/getjob", async (req, res) => {
    try {
        const finddata = await Job.find({});
        res.send(finddata);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});
//put
// app.put("/updatejob/:id",async(req,res)=>{
//     try{
//         const id=req.params.id;
//         const update=await Job.findByIdAndUpdate({_id:id},req.body,{new:true}) ;
//         console.log("Data Updated");
//         res.send(update);
//     }
//     catch(error){
//         console.log(error);
//     }
    
// })
// //delete
// app.delete("/deletejob/:id",async(req,res)=>{
//     try{
//         const deleteData=await Job.findByIdAndDelete(req.params.id);
//         console.log("Data Deleted");
//         res.send(deleteData);
//     }
//     catch(error){
//         console.log(error);
//     }
    
// })

app.listen(PORT,()=>{   
    console.log(`Server running on ${PORT}`);
})