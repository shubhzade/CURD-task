const mongoose =require('mongoose')

const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    tech:{
        type:String,
        require:true,
    },
    Like:{
        type:Boolean,
        require:true,
        default:false
    }

})

module.exports =mongoose.model('CURD-TASK',taskSchema)