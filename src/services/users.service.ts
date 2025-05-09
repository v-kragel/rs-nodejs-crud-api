import { users } from "../db/memory.js";
import { User } from "../models/user.model.js";
import { v4 as uuidv4 } from "uuid";

export const getAllUsers = (): User[] => {
  return users;
};

export const getUserById = (userId: string): User | undefined => {
  return users.find((user) => user.id === userId);
};

export const createUser = (data: Omit<User, "id">): User => {
  const newUser: User = { id: uuidv4(), ...data };
  users.push(newUser);
  return newUser;
};
