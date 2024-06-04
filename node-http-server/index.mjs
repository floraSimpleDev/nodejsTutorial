import { createServer } from "http";

const server = createServer((request, response) => {
  /* response.write("Hello ");
  response.end("World!"); */

  let content = "Hello World!";
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  response.end(content);
});

server.listen(80, () => {
  console.log(
    `Server is listening at http://localhost:${server.address().port}`
  );
});
