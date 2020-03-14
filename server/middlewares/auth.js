const jwt = require('jsonwebtoken');
const serverKey = require('../config/config').server.server_key;
const UserModel = require('../models/users')


const Auth = (req,res,next) => {

    // let token = req.cookies.auth;
    let token = req.query.token;

    jwt.verify(token,serverKey,(err,decode)=>{

        if(err) return res.json({success:false,isAuth:false})

        UserModel.findOne({email:decode.email,password:decode.password,token:token},(err,user) => {
            if(err) return res.send(err)
            if(!user) return res.json({success:false,isAuth:false});

            req.token  = token;
            req.user   = user
            next();

        })
    })

}


module.exports = Auth