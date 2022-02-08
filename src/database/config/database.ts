import mongoose from "mongoose"
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/anlixDB')
.then(() => console.log("Connection Successful"))
.catch((err) => console.log(err))