const mongoose = require('mongoose');

const connectDB = async () =>{
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        mongoose.connect(process.env.MONGO, connectionParams);
        console.log('connected to dabase successfully')
    } catch (error) {
        console.log(error)
        console.log-('could not connect to database')
    }
}

module.exports = connectDB