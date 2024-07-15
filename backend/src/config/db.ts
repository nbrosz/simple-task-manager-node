const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected...');
  } catch (err) {
    if (err instanceof Error)
    {
        console.error(err.message);
    }
    else {
        console.error('An unknown error occurred connecting to MongoDB');
    }
    process.exit(1);
  }
};

module.exports = connectDB;