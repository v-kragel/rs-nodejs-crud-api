import { IncomingMessage, ServerResponse } from "node:http";
import {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
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

  if (isUserIdRoute) {
    const userId = urlParts[2];

    if (method === "GET") {
      return getSingleUser(res, userId);
    }

    if (method === "PUT") {
      return updateUser(req, res, userId);
    }

    if (method === "DELETE") {
      return deleteUser(res, userId);
    }
  }

  sendResponse(res, 404, { message: "Route not found" });
};
