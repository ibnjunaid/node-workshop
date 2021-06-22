const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name : String,
    age : Number,
    gender : String,
    dob: Date,
    isVasc : Boolean,
    favFood : mongoose.Schema.Types.Array
});
export default catSchema;