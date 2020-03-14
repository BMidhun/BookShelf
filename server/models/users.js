const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const UserSchema = mongoose.Schema({

    email:{
        type:String,
        required : true,
        trim : true,
        unique : true
    },

    password : {
        type: String,
        required:true,
        minlength: 8
    },

    firstname : String,

    lastname : String,

    username : {
        type : String,
        required : true
    },

    role : {

        type : Number,
        default : 0
    },

    token : String


})

UserSchema.pre('save',function(next) {

    const user = this;
    const saltRound = 10;

    if(user.isModified('password')){
    bcrypt.genSalt(saltRound,(err,salt) => {

        if(err)
            return next(err)
        
        bcrypt.hash(user.password,salt,(err,hashedPassword) => {

            if(err)
                return next(err)
            
            user.password = hashedPassword;
            next();
        })
    })
  }
  else
    next();

})



const UserModel = mongoose.model('user',UserSchema);

module.exports  = UserModel;