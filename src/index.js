const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());

app.use(cors());

app.use("/users", userRoutes);
app.use("/note", noteRoutes);

app.get("/", (req, res) => {
    res.send("Notes API");
});


const PORT = process.env.PORT || 5000;

console.log('MONGO_URI:', process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log("Server started on port no. 5000");
        });
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    })



