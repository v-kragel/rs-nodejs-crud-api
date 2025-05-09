import { IncomingMessage, ServerResponse } from "node:http";
import { handleUsersRoute } from "./routes/users.routes.js";

export const handleRequest = (req: IncomingMessage, res: ServerResponse) => {
  if (req.url?.startsWith("/api/users")) {
    handleUsersRoute(req, res);
  } else {
    res.writeHead(404);
    res.end("Route not found");
  }
};
