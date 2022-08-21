import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import User from "../../database/models/Users";
import registerUser from "./usersControllers";
import CustomError from "../utils/Custom Error";

describe("Given a register user controller", () => {
  const newUser = {
    userName: "Pepe",
    password: "125",
  };
  const req = {
    body: newUser,
  } as Partial<Request>;

  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  } as Partial<Response>;

  const next: Partial<NextFunction> = jest.fn();

  describe("When registerUser is called", () => {
    test("It should invoke the reponse method json and register an user", async () => {
      const hashPassword = "12345";
      User.create = jest.fn().mockResolvedValue(newUser);
      bcrypt.hash = jest.fn().mockResolvedValue(hashPassword);

      await registerUser(req as Request, res as Response, next as NextFunction);

      expect(res.json).toHaveBeenCalledWith({ user: newUser });
    });
  });
  describe("When it receives a correct response", () => {
    test("It should return a response with status code 200", async () => {
      const statusCode = 200;

      User.create = jest.fn().mockResolvedValue(newUser);

      await registerUser(req as Request, res as Response, next as NextFunction);

      expect(res.status).toHaveBeenCalledWith(statusCode);
    });
  });
  describe("When it receives an incorrect response", () => {
    test("It should call the next function error", async () => {
      const error = new CustomError(400, "register error", "invalid register");
      User.create = jest.fn().mockRejectedValue(error);

      await registerUser(req as Request, res as Response, next as NextFunction);

      expect(next).toBeCalledWith(error);
    });
  });
});
