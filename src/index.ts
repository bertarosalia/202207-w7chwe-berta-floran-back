import "./loadEnvironment";
import connectDB from "./database";
import startServer from "./server/startServer";

const port = +process.env.PORT || 4000;

const mongoURL = process.env.MONGOURL;

(async () => {
  try {
    await connectDB(mongoURL);
    await startServer(port);
  } catch (error) {
    process.exit(1);
  }
})();
