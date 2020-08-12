const mongoose = require('mongoose');
const {Schema} = mongoose;

const linkSchema = new Schema( {
      Link : String,
      short : String
} );


module.exports = linkSchema;