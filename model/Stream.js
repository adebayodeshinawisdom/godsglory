import mongoose from 'mongoose';


const streamSchema = mongoose.Schema({
    link:{
        type: String,
        required: true
    },
    
    
    username:{
        type: String,
        required: true,
    
    },
}, {timestamps: true,
}
)

mongoose.models = {};
const Stream =  mongoose.model("Stream", streamSchema);

export default Stream;