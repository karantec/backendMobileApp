const mongoose=require('mongoose');


const dbURI = 'mongodb+srv://karanrana3095:T16flBis9VdaHg3E@cluster0.g9opmzr.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    // Adds an index to improve query performance
   // Disables deprecated findOneAndUpdate
})
.then(() => {
    console.log("Connection successful");
})
.catch((error) => {
    console.error("Error connecting to the database:", error.message);
});

const Schema=new mongoose.Schema({   
    Companyname:{
        type: String,
        trim:true
       
    },
     Role:{
        type:String,
        required:true
    },
    Experience:{
        type:String,
    },
    Location:{
        type:"String",
        required:true
    },
    Image:{
        type:String,
        required:true
    },
    Salary:{
        type:String,
    },
    Skills:{
        type:String,    
    },
    JobDescription:{
        type:String,
        required:true
    },
    ApplyLink:{
        type:String,
        required:true
    }
    
})
const Job=mongoose.model("Job",Schema);

module.exports=Job;