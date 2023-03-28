import mongoose from 'mongoose'

const StreamSchema = new mongoose.Schema({
    link: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        
    },
    

}, {timestamps: true});

const Stream = mongoose.models.Stream || mongoose.model("Stream", StreamSchema);
export default Stream;