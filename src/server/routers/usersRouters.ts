import express from "express";

const usersRouter = express.Router();
usersRouter.get("/users", usersRouter);

export default usersRouter;
