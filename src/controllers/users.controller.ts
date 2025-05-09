import { ServerResponse } from "node:http";
import { getAllUsers } from "../services/users.service.js";

export const handleGetUsers = (res: ServerResponse) => {
  const allUsers = getAllUsers();

  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(allUsers));
};
