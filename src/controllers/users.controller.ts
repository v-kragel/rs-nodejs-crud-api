import { IncomingMessage, ServerResponse } from "node:http";
import { getAll, getById, create, remove } from "../services/users.service.js";
import { validate as isValidUUID } from "uuid";
import { sendResponse } from "../utils/sendResponse.js";
import { parseRequestBody } from "../utils/parseRequestBody.js";
import { validateUserPayload } from "../utils/validateUserPayload.js";

export const getUsers = (res: ServerResponse) => {
  const allUsers = getAll();

  sendResponse(res, 200, allUsers);
};

export const getSingleUser = (res: ServerResponse, userId: string) => {
  if (!userId || !isValidUUID(userId)) {
    return sendResponse(res, 400, { message: "Invalid UUID format" });
  }

  const user = getById(userId);

  if (!user) {
    return sendResponse(res, 404, {
      message: `User with id ${userId} not found`,
    });
  }

  sendResponse(res, 200, user);
};

export const createUser = async (req: IncomingMessage, res: ServerResponse) => {
  let body;
  try {
    body = await parseRequestBody(req);
  } catch (error) {
    return sendResponse(res, 400, { message: "Invalid request body" });
  }

  const validationResult = validateUserPayload(body);

  if (!validationResult.valid) {
    return sendResponse(res, 400, { message: validationResult.message });
  }

  const newUser = create(body);

  sendResponse(res, 201, newUser);
};

export const deleteUser = (res: ServerResponse, userId: string) => {
  if (!userId || !isValidUUID(userId)) {
    return sendResponse(res, 400, { message: "Invalid UUID format" });
  }

  const deleted = remove(userId);

  if (!deleted) {
    return sendResponse(res, 404, {
      message: `User with id ${userId} not found`,
    });
  }

  sendResponse(res, 204, { message: `User was deleted successfully` });
};
