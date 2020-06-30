
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const URI = require("../config/keys").mongoURI;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log("db connected")
});

//links schema
const linkSchema = new Schema({
  URL: {type:String, unique:true},
  baseUrl: {type:String,unique:true},
  code: {type:String,unique:true},
  title: {type:String},
  visits: {type:String}
});
const linkModel = mongoose.model('link', linkSchema);

 link = new linkModel({
  URI : "sss"
  baseUrl: "ss",
  code: "xww",
  title: "qq",
  visits: "ldlepweldpwkfkgoho"
})

 linkModel.save((error,results) => {
  if(error){
    console.log("erroooorrrrr yyya guuyysss")
  }
  else {
    console.log("doonnneeee !!!!")
  }
 })
 module.exports.linkModel = linkModel;

//user schema
const usersSchema = new Schema({
  username: {type:String, unique:true},
  password: {type:String,unique:true},
  salt: {type:String,unique:true},
});
const users = mongoose.model('users', uesersSchema);
 
 users = new usersModel
({
  username : "name"
   password: "****",
  salt: "dd"
})

 users.save((error,results) => {
  if(error){
    console.log("error")
  }
  else {
    console.log("done!!!!")
  }
 })
 module.exports.usersModel = usersModel;


 // Create sessionsSchema
  const sessionsSchema = new Schema({
  hash: {type:String, unique:true},
  userId: {type:String,unique:true},
 
});
const sessionsSchema = mongoose.model('sessionsSchema', uesersSchema);
 
 users = new usersModel
({
  hash : "name"
  userId :"22",
})

 sessionsSchema.save((error,results) => {
  if(error){
    console.log("error")
  }
  else {
    console.log("done!!!!")
  }
 })
 module.exports.sessionsSchema = sessionsSchema;

// Create clicksSchema
  const clicksSchema = new Schema({
  linkId : {type:String,unique:true},
 
});
const clicksSchema = mongoose.model('clicksSchema', uesersSchema);
 
 users = new usersModel
({
  linkId :"22",
})

 clicksSchema.save((error,results) => {
  if(error){
    console.log("error")
  }
  else {
    console.log("done!!!!")
  }
 })
 module.exports.clicksSchema = clicksSchema;
