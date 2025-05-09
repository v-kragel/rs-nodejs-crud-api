import { IncomingMessage, ServerResponse } from "node:http";
import { getAllUsers, getUserById } from "../services/users.service.js";
import { validate as isValidUUID } from "uuid";
import { sendResponse } from "../utils/response.js";

export const getUsers = (res: ServerResponse) => {
  const allUsers = getAllUsers();

  sendResponse(res, 200, allUsers);
};

export const getSingleUser = (req: IncomingMessage, res: ServerResponse) => {
  const userId = req.url?.split("/").at(-1);

  if (!userId || !isValidUUID(userId)) {
    return sendResponse(res, 400, { message: "Invalid UUID format" });
  }

  const user = getUserById(userId);

  if (!user) {
    return sendResponse(res, 404, {
      message: `User with id ${userId} not found`,
    });
  }

  sendResponse(res, 200, user);
};
