import ErrorWithCode from "../../interfaces/ErrorWithCode";

class CustomError extends Error implements ErrorWithCode {
  code: string;

  constructor(
    public StatusCode: number,
    public message: string,
    public publicMessage: string
  ) {
    super(message);
  }
}
export default CustomError;
