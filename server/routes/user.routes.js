const express = require('express');
const router = express.Router();

const Auth = require('../middlewares/auth')

const userController = require('../controllers/user.controller')

router.post('/register',userController.addUser);
router.post('/login', userController.getUser);
router.get('/getreviewer',userController.getReviewer);
router.get('/getusers',userController.getAllUsers);
router.get('/userposts',userController.userPosts);
router.get('/logout',Auth,userController.logout);
router.get('/isAuth',Auth,userController.isAuth);



module.exports = router;