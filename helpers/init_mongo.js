const mongoose =require('mongoose')
const UserSchema = require('../Models/User.model');
const jsonData = require('../Lana_Realtionship_Data')



mongoose
.connect('mongodb://localhost:27017/',{dbName:'list_of_exes'})
.then(()=>{
    console.log("MongoServer is connected")
})
.catch((err) => console.log(err.message))


mongoose.connection.on('connected' ,()=>{
    console.log('Mongoose connected to db🔥🔥')
})
mongoose.connection.on('error' ,(err)=>{
    console.log(err.message)
})


mongoose.connection.on('disconnected' ,()=>{
    console.log('Mongoose is disconneted💀💀')
})


process.on("SIGINT",async()=>{                                     //SIGNIT stands from ctrl+c
    await mongoose.connection.close()
    process.exit(0)                                                //when u end the termianl the shortcut
                                                                   //using the mongo cnnection is ended
})



async function insertData() {
    try {
    await User.insertMany(jsonData);
        console.log('Data inserted successfully!');
    } catch (error) {
        console.error('Error inserting data:', error);
    } finally {
        mongoose.connection.close();
    }
}
insertData();