import mongoose from "mongoose";

const requestSchema=mongoose.Schema({
    name: String,
    username:String,
    password:String,
    gender: String,
    age: Number,
    bloodgroup: String,
    positivedate: Date,
    phone: Number,
    state : String,
    city : String

});

const Requester=mongoose.model('Requester',requestSchema);

export default Requester;