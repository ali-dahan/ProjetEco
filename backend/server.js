const express = require('express')
const app = express();
const productrouter=require("./routes/products.routes")
const mongoose = require('mongoose');
const cors = require('cors');

const URL = "mongodb+srv://alidahan:N0jqd9nJf1Wtdoqt@cluster0.acriswq.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(URL)
.then(result=>app.listen(5000,()=>console.log("server running")))
.catch(err=>console.log(err));

app.use(cors());
app.use(express.json());
app.use("/products",productrouter); 

