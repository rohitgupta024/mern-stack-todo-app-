const mongoose = require('mongoose')
// const bcrypt = require('bcrypt');


const work = mongoose.Schema({
    name:{
        type:String,
       required:true
        

    },
  
})


// work.pre("save", async function(next){
//     if(this.isModified('lname')){
//       this.lname = await bcrypt.hash(this.lname,9)
//     }
//     next()
// })

const User = new mongoose.model("User",work)

module.exports = User;