import "dotenv/config";
import { createServer } from "node:http";

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

const server = createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Server is running! \n");
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
