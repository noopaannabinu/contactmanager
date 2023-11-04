import 'dotenv/config'

const {
    MONGODB_SERVERLESS_USERNAME,
    MONGODB_SERVERLESS_PASSWORD,
    MONGO_DB_NAME,
  } = process.env;

console.log(process.env['SECRET'])