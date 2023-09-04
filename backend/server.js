const express =require('express');
const mongoose= require('mongoose');
const app = express();
const cors = require('cors');
app.use(cors());
const Donate = require("./model");
app.use(express.json())
// app.use(cors());
mongoose.connect('mongodb+srv://pavan147:pavan123@cluster0.xaedvyt.mongodb.net/',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>
    console.log("DB connected")
).catch(err=>console.log(err))

app.get('/',(req,res)=>{
    res.send("hello world");
})
app.post('/donation', async(req,res)=>{
    const {name,mobilenumber,address,bloodtype} =req.body;
    try{
        const newData = new Donate({name:name,mobilenumber:mobilenumber,address:address,bloodtype:bloodtype});
        await newData.save();
        return res.json(await Donate.find());
        console.log(req.body);
        // const data = JSON.parse(response.data);
        // console.log(data)


    }
    catch(err){
        console.log(err)
    }

})
app.get('/donate', async(req,res)=>{
    try{
        const donation = await Donate.find();
        return res.json(donation);

    }
    catch(err){
        console.log(err);
    }

})
app.listen(5000,()=>
console.log("server running..")
)