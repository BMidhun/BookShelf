const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/config');
const mongoose = require('mongoose');
const cors = require('cors')
const userRouter = require('./routes/user.routes');
const bookRouter = require('./routes/book.routes');
const app = express();

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use('/user',userRouter);
app.use('/book',bookRouter);

//db connection
const dburl = config.dbconfig.dburl;
mongoose.connect(dburl,{useNewUrlParser: true,  useUnifiedTopology: true},(err)=>{
    err ? console.log('Error in connecting DB') : console.log('DB connected')
})

//server-connection
const port = config.server.port;
app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`)
})