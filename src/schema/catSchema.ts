import mongoose from 'mongoose';

const catSchema = new mongoose.Schema({
    name : {
        type:String,
        required: true,
    },
    age : Number,
    gender : String,
    dob: Date,
    isVasc : Boolean,
    favFood : mongoose.Schema.Types.Array
});
export default catSchema;