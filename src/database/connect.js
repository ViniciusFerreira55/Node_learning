const mongoose = require('mongoose')

const connectToDatabase = async () => {
    await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.kfy2fq8.mongodb.net/?retryWrites=true&w=majority`, 
        (error) => {
        if (error){
            return console.log("Deu erro no db")
        }
        return console.log('Deu certo o db')
    });
};

module.exports = connectToDatabase