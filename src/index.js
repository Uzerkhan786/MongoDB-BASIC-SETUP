const express=require('express');
const {PORT}=require('./config/env-config')
const mogoDB=require('./utils/db');
const mongoDB = require('./utils/db');
const mongoose=require('mongoose');
const { user } = require('./models/user');
const Tweet=require('./models/tweet')
const Comment=require('./models/comment');

const app=express();


app.listen(PORT,async(req,res)=>{
    await mongoDB();
    // const tweet=await Tweet.create({
    //     content:'#porn'
    // })

    // const comment=await Comment.create({
    //     content:'Ashleel londa'
    // });
    // tweet.comments.push(comment);
    // tweet.save();
    // console.log(tweet);

    const tweet=await Tweet.findById('656763b1196673aa534fbfe5').populate({path:'comments'});
    console.log(tweet);
    console.log(`Server is listening at ${PORT}`);
})