const express = require("express")
const cors  = require("cors")
const {Cars} = require("./db")
const app = express();
app.use(express.json());
app.use(cors())

app.post("/create", async(req, res)=>{
    const { carName, price } = req.body;
    try{
       const user = await Cars.create({
        carName, 
        price
       })
       console.log("Details Submitted!")
       return res.json({
        id : user.id
       })
    }catch(e){
        console.log(e)
        res.json({
            msg : "Something went wrong!"
        })
        return;
    }
})

app.delete('/delete', async (req, res)=>{
    console.log("inside delete route")
    const { id } = req.query;
    try{
        const user = await Cars.findByIdAndDelete(id);
        res.json({
            msg : "Deleted Successfully"
        })
        return;
    }catch(e){
        console.log(e)
        res.json({
            msg : "Something went wrong!"
        })
        return;
    }
})

app.get('/all', async (req, res)=>{
    try{
        const user = await Cars.find();
        res.json({
            user
        })
        return;
    }catch(e){
        console.log(e)
        res.json({
            msg : "Something went wrong!"
        })
        return;
    }
})

app.put('/update', async (req, res)=>{
    try{
        const { id } = req.query;
        const body = req.body;
        const user = await Cars.findByIdAndUpdate(id,{
            carName : body.carName,
            price   : body.price
        })
        return res.json({
            id : user.id
        })
    }catch(e){
        console.log(e)
        res.json({
            msg : "Something went wrong!"
        })
        return;
    }
})

module.exports(app)