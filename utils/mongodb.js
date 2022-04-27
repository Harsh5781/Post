const mongoose = require('mongoose')
const url = process.env.Url || 'mongodb://localhost:27017/post'
const connect = async function(){mongoose.connect(url)
.then(()=>{
    console.log('Connected to database')
})
.catch((err)=>{
    console.log(err)
})
}
module.exports = connect