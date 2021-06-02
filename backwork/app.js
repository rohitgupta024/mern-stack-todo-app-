const express = require("express")
const app = express()
const port = 4029;
const cors = require('cors');

require('./db/conaction')
const bodyParser = require('body-parser');
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(bodyParser.urlencoded({
//     extended: false
// }));

const User = require('./models/Schema')


// app.get('/', (req, res) => {
//     res.send('hello for the home ')
// })



app.post("/apiwork", async (req, res) => {
    const classinput ={
        name: req.body.name,
        lname: req.body.lname,  
    }
    try {
        const user = new User(classinput)

        const data = await user.save()
        res.status(201).send(data)
    } catch (error) {
        console.log(error);
    }
})




app.get("/apiwork", async (req, res) => {
    try {

        const dataid = await User.find()
        res.status(201).send(dataid)

    } catch (error) {
        // res.send(error)
        console.log(error)
    }
})

app.get("/apiwork/:id", async (req, res) => {
    try {

        const dataid = await User.findById(req.params.id)
        res.status(201).send(dataid)

    } catch (error) {
        // res.send(error)
        console.log(error)
    }
})

app.delete('/apiwork/:id',async(req,res)=>{
    try {
     const result = await User.findOneAndDelete({_id: req.params.id})
     res.send(result)
    } catch (error) {
        console.log(error)
    }
 })
// app.delete('/apiwork/:id', (req, res, next) => {
//     User.findOneAndDelete({"_id": req.params.id})
//       .then(data => res.json(data))
//       .catch(next)
//   })

app.put("/apiwork/:id", async (req, res) => {
    try {
        // console.log(req.params.id)
        const result = await User.findByIdAndUpdate({ _id: req.params.id }, {
            $set: {
                name: req.body.name,
                lname: req.body.lname,

            }
        })
        res.send(result)
    } catch (error) {

        console.log(error)
    }
})

app.listen(port)


