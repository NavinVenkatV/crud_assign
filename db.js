const mongoose = require("mongoose");


const connectToMongoDB = async () => {
    console.log(process.env.url)
    try {
        await mongoose.connect("mongodb+srv://navinvenkatv:navinvenkatv@cluster0.sidyjsl.mongodb.net/");
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); 
    }
};


connectToMongoDB();

const userSchema = new mongoose.Schema({
    carName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Cars = mongoose.model("Car", userSchema);

module.exports = { Cars };