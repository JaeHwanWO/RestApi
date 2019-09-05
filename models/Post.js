const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
    title: { 
        type: String,
        required: true
    },
    description: { 
        type: String,
        required: true
    },
    date: { 
        type: Date,
        default: Date.now
    }
})

// export 하기
module.exports = mongoose.model('Posts', PostSchema);
 