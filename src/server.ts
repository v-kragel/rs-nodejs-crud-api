import "dotenv/config";

import { createServer } from "node:http";

import { handleRequest } from "./app.js";

const PORT = process.env.PORT || 4000;

const server = createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
