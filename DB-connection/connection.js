const mongoose=require('mongoose')

const connectionString=process.env.DATABASE

mongoose.connect(connectionString,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=>{
    console.log("mongodb atlas connected to ems server!!!!");
}).catch((err)=>{
    console.log("mongodb connection failed");
})