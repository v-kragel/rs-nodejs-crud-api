import { User } from "../models/user.model";
import { v4 as uuidv4 } from "uuid";

export const users: User[] = [
  {
    id: uuidv4(),
    firstName: "Vlad",
    lastName: "Kragel",
    age: 27,
    email: "vlad.kragel.main@gmail.com",
  },
  {
    id: uuidv4(),
    firstName: "Aliona",
    lastName: "Romanenko",
    age: 27,
    email: "aliona.romanenko@gmail.com",
  },
];
