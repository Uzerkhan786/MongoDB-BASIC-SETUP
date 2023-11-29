const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        default:'uzer'
    },
    description:{
       type: String,
       required:true
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }]
    
},{
    require:true
})

const user=mongoose.model('User',userSchema);

module.exports={user};


