import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  userName: {
    type: String,
    require: true,
    unique: true,
  },
  image: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
});

const User = model("User", UserSchema, "users");

export default User;
