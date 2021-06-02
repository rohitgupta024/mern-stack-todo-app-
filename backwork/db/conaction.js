const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/Rohitguptatry", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Connect database😁")
}).catch((e) => {
    console.log(e)
})