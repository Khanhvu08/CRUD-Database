const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
    name:{
        type: 'string', 
        required: true
    },
    birthday:{
        type: 'string',
    },
    age:{
        type: 'Number',
        required:true
    }
})
const userModel = mongoose.model('user', usersSchema)
module.exports = userModel