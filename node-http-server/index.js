import { createServer } from "http";
import guitars from "./data.js";

const server = createServer((request, response) => {
  /* 4.3 tutorial
  response.write("Hello ");
  response.end("World!"); 

  let content = "Hello Node.js!";
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  response.end(content);*/
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  const url = new URL(request.url, "http://localhost");
  const id = url.searchParams.get("id");

  const content = `
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Guitars</title>
    </head>
    <body style="font-size: 2rem">
        ${id ? getGuitarContent(id) : createList()}
    </body>
    </html>
    `;
  response.end(content);
});

const createList = () => `
  <h2>My Guitars</h2>
  <ul>
    ${guitars.map(createListItem).join("\n")}
  </ul>`;

const createListItem = ({ id, make, model }) =>
  `<li>
    <a href="?id=${id}">${make} ${model}</a>
  </li>`;

const getGuitarContent = (id) => {
  const guitar = guitars.find((gui) => gui.id == id);

  return guitar
    ? `<h2>${guitar.make} ${guitar.model}</h2>`
    : "<p>Guitar does not exist.</p>";
};

server.listen(80, () => {
  console.log(
    `Server is listening at http://localhost:${server.address().port}`
  );
});
