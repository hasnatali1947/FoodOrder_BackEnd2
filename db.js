const mongoose = require('mongoose');
const mongooseUrl = "mongodb://hasnatking1947:pakistan123@ac-q9x1csi-shard-00-00.slp3msx.mongodb.net:27017,ac-q9x1csi-shard-00-01.slp3msx.mongodb.net:27017,ac-q9x1csi-shard-00-02.slp3msx.mongodb.net:27017/?ssl=true&replicaSet=atlas-f5g0y3-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(mongooseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    sslValidate: false
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('MongoDB Connection Successful');
});

db.on('error', (error) => {
    console.log("MongoDB has an error:", error);
});

module.exports = mongoose;
