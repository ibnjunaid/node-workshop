import { model } from 'mongoose';
import catSchema from '../schema/catSchema';

const catModel = model('Cat',catSchema);

export default catModel;