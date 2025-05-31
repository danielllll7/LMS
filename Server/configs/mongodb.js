import mongoose from 'mongoose';

// connect to the mango DB data base

const connectDB = async () => {
    mongoose.connection.on('connected',() => console.log('Officially MongoDB is connected'))

    await mongoose.connect(`${process.env.MONGODB_URI}/lms`)
}

export default connectDB;