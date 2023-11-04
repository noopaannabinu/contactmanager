import 'dotenv/config'
import mongoose from 'mongoose'

const  {
    MONGODB_SERVERLESS_USERNAME,
    MONGODB_SERVERLESS_PASSWORD,
    MONGO_DB_NAME,
  } = process.env;

  const mongoose_uri = `mongodb://127.0.0.1:27017`;

  const db = await mongoose.connect(mongoose_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  });
  
  console.log(db)
  db.close()