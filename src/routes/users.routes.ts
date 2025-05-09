import { IncomingMessage, ServerResponse } from "node:http";
import { handleGetUsers } from "../controllers/users.controller.js";

export const handleUsersRoute = (req: IncomingMessage, res: ServerResponse) => {
  if (req.method === "GET" && req.url === "/api/users") {
    handleGetUsers(res);
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
};
