import mongoose from "mongoose";

const donorSchema=mongoose.Schema({
    name: String,
    username:String,
    password:String,
    gender: String,
    age: Number,
    bloodgroup: String,
    positivedate: Date,
    negativedate: Date,
    phone: Number,
    state : String,
    city : String

});

const Donor=mongoose.model('Donor',donorSchema);

export default Donor;