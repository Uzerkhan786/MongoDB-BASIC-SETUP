const mongoose=require('mongoose');

const mongoDB=async(req,res)=>{

    await mongoose.connect('mongodb://localhost/twitterBackend');
    console.log('Databases is connected to the backend');
    
}
module.exports=mongoDB;