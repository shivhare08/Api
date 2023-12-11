const express = require('express')
const app = express();
const port = 1111;
const connectDB = require('./db/connectDB')
const Student = require('./models/Student')

app.use(express.json());
// app.use('/',(req,res)=>{
//     res.send("blof")
// })

app.get('/student', async(req,res)=>{
    try{
        const all = await Student.find();
        res.send(all) 
    }catch(e){
        console.log(e);
    }
})

//Getting individual data by ID
// app.get('/student/:id', async(req,res)=>{
//     try{
//         const singledata = await Student.findById(req.params.id)
//         // console.log(singledata);
//         res.send(singledata)
//     }catch(e){
//         console.log(e);
//     }
// })

//Getting individual data by Name

app.get('/student/:name', async(req,res)=>{
    try{
        //console.log(req.params.name)
        //let studentname = req.params.name
        const studentdata = await Student.find({name:req.params.name})
        res.send(studentdata)
        //let studentdata = await Student.find({name:studentname})
        //console.log(studentdata);
    }catch(e){
        console.log(e);
    }
})




app.post('/student', async(req,res)=>{
    try{
        const studentdata = new Student(req.body);
        const data = await studentdata.save();
        res.status(201).send(data)

    }catch(e){
        console.log(e)
    }
})

// app.post('/student',(req,res)=>{
//     console.log(req.body)
//     const studentdata = new Student(req.body);
//     studentdata.save().then(()=>{
//         res.status(201).send(studentdata)
//     }).catch((e)=>{
//         res.status(400).send(e)
//     })
// })



connectDB();

app.listen(port,(req,res)=>{
    console.log(`your localhost:${port}`);
})