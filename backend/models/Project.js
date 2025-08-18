import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    title:{type:String, required:true, trim:true},
    project_type:{type:String, required:true, trim: true},
    startDate:{type:Date, required:true},
    endDate:{type:Date, required:true},
    description:{type:String, required:true, trim:true}
});

export default mongoose.model('Project', projectSchema);