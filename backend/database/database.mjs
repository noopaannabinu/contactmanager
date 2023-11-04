import 'dotenv/config'

const  {
    MONGODB_SERVERLESS_USERNAME,
    MONGODB_SERVERLESS_PASSWORD,
    MONGO_DB_NAME,
  } = process.env;



  mongoose.connect(mongoose_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  });
  