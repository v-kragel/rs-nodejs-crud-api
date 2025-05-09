import { IncomingMessage, ServerResponse } from "node:http";
import {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
} from "../controllers/users.controller.js";
import { sendResponse } from "../utils/sendResponse.js";

export const handleUsersRoute = (req: IncomingMessage, res: ServerResponse) => {
  const method = req.method;
  const url = req.url || "";
  const urlParts = url.split("/").filter(Boolean);

  if (method === "GET" && url === "/api/users") {
    return getUsers(res);
  }

  if (method === "POST" && url === "/api/users") {
    return createUser(req, res);
  }

  const isUserIdRoute: boolean =
    urlParts.length === 3 && urlParts[0] === "api" && urlParts[1] === "users";

  if (method === "GET" && isUserIdRoute) {
    return getSingleUser(res, urlParts[2]);
  }

  if (method === "DELETE" && isUserIdRoute) {
    return deleteUser(res, urlParts[2]);
  }

  sendResponse(res, 404, { message: "Route not found" });
};
