import { IncomingMessage, ServerResponse } from "node:http";
import {
  getUsers,
  getSingleUser,
  createSingleUser,
} from "../controllers/users.controller.js";

export const handleUsersRoute = (req: IncomingMessage, res: ServerResponse) => {
  const method = req.method;
  const url = req.url || "";

  if (url === "/api/users") {
    if (method === "GET") return getUsers(res);
    if (method === "POST") return createSingleUser(req, res);
  }

  const userIdMatch = url.match(/^\/api\/users\/([a-fA-F0-9\-]+)$/);

  if (userIdMatch && method === "GET") {
    return getSingleUser(req, res);
  }
};
