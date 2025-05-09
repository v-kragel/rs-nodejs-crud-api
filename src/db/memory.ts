import { User } from "../models/user.model";
import { v4 as uuidv4 } from "uuid";

export const users: User[] = [
  {
    id: uuidv4(),
    username: "v-kragel",
    age: 27,
    hobbies: ["gaming", "reading"],
  },
  {
    id: uuidv4(),
    username: "a-romanenko",
    age: 27,
    hobbies: ["skiing", "cycling"],
  },
];
