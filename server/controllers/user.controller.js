const UserModel = require('../models/users');
const BookModel = require('../models/books');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const serverKey = require('../config/config').server.server_key

const addUser = (req,res,next)=>{

    const userdata = req.body;

    const user = new UserModel(userdata);

    user.save((err,userdocument) => {

        err ? res.json({success:false}) : res.json({success : true, data : userdocument})
    })
}

const getUser = (req,res,next) => {

    const {email, password} = req.body;

    UserModel.findOne({email},(err,user) => {

        if(err)
            res.send(err)
        
        if(!user)
            res.json({success:false,data:'User not found',isAuth:false})
        
        else
            {
                bcrypt.compare(password,user.password,(err,isMatch) => {

                    if(err)
                        res.send(err)
                    
                    if(isMatch){

                       const token = jwt.sign({email:user.email, password:user.password},serverKey);
                       user.token = token;
                       user.save((err,userdocument) => {
                           if(err)
                            return res.status(400).send(err)
                        
                            res.cookie("auth",token);
                            res.json({
                                success:true,
                                data : userdocument,
                                isAuth:true,
                            })
                       })
                        // res.json({success:true,data:{data : user, token}})
                    }
                    
                    else
                    res.send({success:false,data:'Password does not match',isAuth:false})
                })
            
            }
            
    })
}


const getReviewer = (req,res,next) => {

        const id = req.query.id
        UserModel.findById(id,(err,reviewer) => {
            if(err) return res.json({success:false});

            res.json({success :true,data:{firstname:reviewer.firstname,lastname:reviewer.lastname}});
        })
}

const getAllUsers = (req,res,next) => {

    UserModel.find({},(err,users) => {
        if(err) return res.json({success:false});
        res.json({success:true,data:users})
    })
}

const userPosts = (req,res,next) => {

    const id = req.query.id
    BookModel.find({ownerId:id},(err,posts) => {
        if(err) return res.json({success:false});

        res.json({success:true,data:posts})
    })
}


const isAuth = (req,res,next) => {

    res.json({success:true,data:req.user,isAuth:true})
}


const logout = (req,res,next) => {

        let user = req.user;


        UserModel.updateOne({_id:user._id},{$unset:{token:1}},(err,doc) => {
            if(err) return res.json({success:false})

            res.json({success:true})
        })
}



module.exports = {addUser,
                  getUser,
                  getAllUsers,
                  getReviewer,
                  userPosts,
                  logout,
                  isAuth
                }