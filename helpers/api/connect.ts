import { connect, ConnectionOptions } from 'mongoose';

declare const process: {
  env: {
    DATABASE_URL: string;
  };
};

const { DATABASE_URL } = process.env;

const options: ConnectionOptions = {
  useFindAndModify: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
};

export const connectToDatabase = () => connect(DATABASE_URL, options);
