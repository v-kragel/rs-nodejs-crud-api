import { users } from "../db/memory.js";
import { User } from "../models/user.model.js";

export const getAllUsers = (): User[] => {
  return users;
};
