const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require('./config/db.js')
//load env vars
dotenv.config({path: './config/config.env'});

connectDB()

const app = express();

//Body Parser
app.use(express.json())

//static folder
app.use(express.static("public"));

//Enable cors
app.use(cors())

app.use('/api/v1/stores', require('./routes/stores.js'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} at port ${PORT}`);
});