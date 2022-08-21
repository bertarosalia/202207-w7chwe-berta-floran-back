import CustomError from "./Custom Error";

describe("Given a custom error class", () => {
  describe("When it´s instantianted with a statusCode 404, a public message and a private message ", () => {
    test("It should create an object with those properties", () => {
      const codeStatus = 400;
      const privateMessage = "Endpoint not found";
      const publicMessage = "Page not found";

      const errorExpected = new Error() as CustomError;
      errorExpected.StatusCode = codeStatus;
      errorExpected.message = privateMessage;
      errorExpected.publicMessage = publicMessage;

      expect(errorExpected).toHaveProperty("StatusCode", codeStatus);
      expect(errorExpected).toHaveProperty("message", privateMessage);
      expect(errorExpected).toHaveProperty("publicMessage", publicMessage);
    });
  });
});
