import express from "express";
import Requester from "../models/requester.js";
const requester = express.Router();

requester.get('/getrequesters', async (req, res) => {
    try {
        const requester = await Requester.find(req.query);
        res.status(200).json(requester);

    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: err.message })
    }
})

requester.post('/checkrequester', async(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    

    if(!username || !password)
    {
       // console.log(username+","+password);
        return res.status(422).json({error:"Please fill all the fileds carefully"});
    }
    try
    {
        const usernameExist= await Requester.findOne({username:username});
        if(usernameExist)
        {
            console.log(usernameExist._id+" "+usernameExist.password);
            if(password == usernameExist.password)
            return res.status(200).json({id:usernameExist._id});
            else
            return res.status(422).json({error:"Incorrect Password"});
        }
    }
    catch(err)
    {
        return res.status(422).json({error:"Incorrect Username"});
    }
})

requester.post('/updaterequester',async (req,res) => {
    const username=req.body.username;
    const newage=req.body.age;
    const newbloodgroup=req.body.bloodgroup;
    const newpositivedate=req.body.positivedate;
    const newphone=req.body.phone;
    const newstate=req.body.state;
    const newcity=req.body.city;

    if(!username || !newage || !newbloodgroup || !newpositivedate || !newphone || !newstate || !newcity)
    {
        return res.status(422).json({error:"Please fill all the fileds carefully"});
    }
    try{
        const usernameExist= await Requester.findOne({username:username});
        if(usernameExist)
        {
            usernameExist.age=newage;
            usernameExist.bloodgroup=newbloodgroup;
            usernameExist.positivedate=newpositivedate;
            usernameExist.phone=newphone;
            usernameExist.state=newstate;
            usernameExist.city=newcity;
            usernameExist.save();
            res.json({"status":"form submited"});
        }
        else
        {
            return res.status(422).json({error:"Incorrect Username"});
        }
    }
    catch(err)
    {
        console.log(err);
    }
    
})

requester.delete('/deleterequester/:id', async (req,res)=> {
    const id=req.params.id;
    console.log(id);
    await Requester.findByIdAndRemove(id).exec();
   
    res.status(200).json({msg:"User Deleted Successfully"})

})

requester.post('/createrequester',async (req,res)=>{

    console.log(req.body);

    const name=req.body.name;
    const username=req.body.username;
    const password=req.body.password;
    const gender=req.body.gender;
    const age=req.body.age;
    const bloodgroup=req.body.bloodgroup;
    const positivedate=req.body.positivedate;
    const phone=req.body.phone;
    const state=req.body.state;
    const city=req.body.city;

    if(!name || !username || !password || !gender || !age || !bloodgroup || !positivedate || !phone || !state || !city)
    {
        return res.status(422).json({error:"Please fill all the fileds carefully"});
    }

    try{
        const usernameExist= await Requester.findOne({username:username});
        if(usernameExist)
        {
            return res.status(422).json({error:"Please enter unique username."})
        }
        const userExist= await Requester.findOne({phone:phone});
        if(userExist)
        {
            return res.status(422).json({error:"User already exists with this contact number."})
        }
        else
        {
            const newRequester=new Requester({
                name,
                username,
                password,
                gender,
                age,
                bloodgroup,
                positivedate,
                phone,
                state,
                city
            })
            newRequester.save();
            res.json({"status":"form submited"});
        }
    }
    catch(err)
    {
        console.log(err);
    }
})

export default requester;