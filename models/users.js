const mongoose = require('mongoose');
const {Schema} = mongoose;
const linkSchema = require('./linkSchema');


const userSchema = new Schema({
      googleId : String,
      link : [linkSchema]
});

mongoose.model('users', userSchema);
