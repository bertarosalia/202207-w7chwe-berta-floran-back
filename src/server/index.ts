import express from "express";
import cors from "cors";
import morgan from "morgan";
import usersRouter from "./routers/usersRouters";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/users", usersRouter);

export default app;
