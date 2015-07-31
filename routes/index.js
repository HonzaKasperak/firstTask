
/*
 * GET home page.
 */
 
var mongoose = require( 'mongoose' );
var User = mongoose.model( 'User' );
var countries = require('country-data').countries;

exports.index = function ( req, res ){
  User.find( function ( err, users, count ){
    res.render( 'index', {
        title : 'This is my First Task.',
        users : users,
        countries: countries
    });
  });
}; 

exports.create = function ( req, res ){
  new User({
    username : req.body.username,
    location : req.body.location,
    created : Date.now()
  }).save( function( err, user, count ){
    res.redirect( '/' );
  });
};