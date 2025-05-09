import { users } from "../db/memory.js";
import { User } from "../models/user.model.js";
import { v4 as uuidv4 } from "uuid";

export const getAll = (): User[] => {
  return users;
};

export const getById = (userId: string): User | undefined => {
  return users.find((user) => user.id === userId);
};

export const create = (data: Omit<User, "id">): User => {
  const newUser: User = { id: uuidv4(), ...data };
  users.push(newUser);
  return newUser;
};

export const remove = (userId: string): boolean => {
  const index = users.findIndex((user) => user.id === userId);

  if (index === -1) return false;

  users.splice(index, 1);

  return true;
};
