import { createServer } from "http";
import guitars from "./data.js";
import { createList, getGuitarContent, view, getForm } from "./content.js";

const server = createServer((request, response) => {
  /* /delete/id, index 2 is id */
  const parts = request.url.split("/");

  if (parts.includes("delete")) {
    handleDelete(parts[2]); //pass id into handleDelete()
    redirect(response, "/");
  } else {
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    const url = new URL(request.url, "http://localhost");
    const id = url.searchParams.get("id");

    let content = "";

    if (parts.includes("add")) {
      content = getForm();
    } else if (id) {
      const guitar = guitars.find((gui) => gui.id == id);
      content = getGuitarContent(guitar);
    } else {
      content = createList(guitars);
    }

    response.end(view(content));
  }
});

function handleDelete(id) {
  let index = guitars.findIndex((guitar) => guitar.id == id);
  guitars.splice(index, 1);
}

function redirect(response, to) {
  response.writeHead(302, { location: to, "Content-Type": "text/plain" });
  response.end(`Redirect to ${to}`);
}

server.listen(80, () => {
  console.log(
    `Server is listening at http://localhost:${server.address().port}`
  );
});
