import { connect, ConnectionOptions } from 'mongoose';

declare const process: {
  env: {
    MONGO_URI: string;
  };
};

const { MONGO_URI } = process.env;

const options: ConnectionOptions = {
  useFindAndModify: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
};

export const connectToDatabase = () => connect(MONGO_URI, options);
