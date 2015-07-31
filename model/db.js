var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;
 
var User = new Schema({
    username : String,
    location  : String,
    created  : Date
});
 
mongoose.model( 'User', User );
 
mongoose.connect( 'mongodb://localhost/user-location' );