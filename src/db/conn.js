const mongoose = require("mongoose")

// creating a database
mongoose.connect("mongodb+srv://Cluster0:353c6fyA7nPPQLN@cluster0.niyun.mongodb.net/mern?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection Successfully");
}).catch((error) => {
    console.log(error);
})

