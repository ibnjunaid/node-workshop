const { model } = require('mongoose');
const catSchema = require('../schema/catSchema');

const catModel = model('Cat',catSchema);

export default catModel;