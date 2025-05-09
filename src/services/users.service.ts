import { users } from "../db/memory.js";
import { User } from "../models/user.model.js";

export const getAllUsers = (): User[] => {
  return users;
};

export const getUserById = (userId: string): User | undefined => {
  return users.find((user) => user.id === userId);
};
