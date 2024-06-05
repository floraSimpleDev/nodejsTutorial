# nodejsTutorial

## 2.4 calc.js file

```
process.stdin.on('data', chunk => {});
```

```
process.exit(0);
```

```
process.stdout.write('');
```

## 2.5 calc_common.js file

```
require('readline');
```

```
readline.createInterface({input, output});
```

```
readline.question(query, answer);
```

```
readline.close();
```

## 2.6 calc_es.mjs file

```
try {}
catch(exception) {}
```

## 3.1 feed-manager.mjs file

1 obtain the absolute directory+file of this file;
2 obtain the absolute directory of this file;
D:\Web_full_stack\5_nodejs\nodejsTutorial\feeds.json

```
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const jsonFile = join(__dirname, "feeds.json");
```

```
import.meta.url
```

## 3.2 feed-manager.mjs file

constants.F_OK check if the file exits.

```
import { access, constants, readFile, writeFile } from 'fs/promises';
...
await access(file, constants.F_OK);
```

```
await readFile(file, {encoding: 'utf-8'});
return JSON.parse(contents);
```

```
await writeFile(file, JSON.stringify(links));
```

## 3.3 feedreader.mjs file

```
parseInt(string, 10);
```

```
feeds.splice(index, 1);
```

```
close();
```

## 3.4 feedreader.mjs file

npm install axios
npm install rss-parser

```
import axios from 'axios';
import Parser from 'rss-parser';
```

```
let response = await axios.get('https://www.reddit.com/r/node.rss');
let data = response.data;

let {data} = await axios.get('https://www.reddit.com/r/node.rss');
```

```
let feed = await parser.parseString(data);
```

```
rl.close();

close();
```

## 3.5 feedreader-evt.mjs file

```
import {EventEmitter} from 'events';
const emitter = new EventEmitter();
```

```
rl.setPrompt('Enter command (list, add, del, read, quit): ');
rl.prompt();
```

```
rl.on('line', () => {});
```

```
emitter.emit(cmdParts[0], cmdParts[1]);
```

```
emitter.on('param', () => {});
```

## 4.1 index.mjs and package.json files

create a nodejs json file

```
npm init -y
```

```
import { createServer } from "http";
```

```
response.write("Hello ");
response.end("World!");
```

is equal to

```
let content = "Hello World!";
response.end(content);
```

Adding the head info:

```
response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
```

To display the port number:

```
server.address().port;
```

Listening the server:

```
server.listen(port, () => {});
```

## 4.2 nodemon install and package.json modify

```
"main": "index.js",
"type": "module",
```

```
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "nodemon index.mjs",
  "start": "node index.mjs"
},
```

## 4.3 dynamic generation

Same functionality:

```
response.write("Hello ");
response.end("World!");
```

```
let content = "Hello Node.js!";
response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
response.end(content);
```

## 4.4 query and data render

```
const content = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guitars</title>
  </head>
  <body style="font-size: 2rem">
    <h2>My Guitars</h2>
    <ul>
      ${guitars.map(createListItem).join('\n')}
    </ul>
  </body>
  </html>`;

  response.end(content);
```

## 4.5

```
function redirect(response, to) {
    response.writeHead(302, {location: to, 'Content-Type': 'text/plain'});
    response.end(`Redirect to ${to}`);
}
```

findIndex() and find()

```
function handleDelete(id) {
    let index = guitars.findIndex(g => g.id == id);

    // TODO: check index

    guitars.splice(index, 1);
}
```

```
const guitar = guitars.find(g => g.id == id);
```

## 4.6 tutorial notes

```
if (parts.includes("delete")) {
    handleDelete(parts[2]); //pass id into handleDelete()
    redirect(response, "/");
  }

else {
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  const url = new URL(request.url, "http://localhost");
  const id = url.searchParams.get("id");

  let content = "";

  if (parts.includes("add")) {
    content = getForm();
  }

  else if (id) {
    const guitar = guitars.find((gui) => gui.id == id);
    content = getGuitarContent(guitar);
  }

  else {
    content = createList(guitars);
  }

  response.end(view(content));
}
```

## 4.7 tutorial notes

```
 if (request.method === "POST") {
    let body = "";

    request.on("readable", () => {
      const data = request.read();

      if (data !== null) {
        body += data;
      }
    });

    request.on("end", () => {
      const guitar = parse(body);

      saveGuitar({
        make: guitar.guitar_make,
        model: guitar.guitar_model,
      });

      redirect(response, "/");
    });
  }
  // GET
  else {}
```

## 4.8 add static css file

```
<link rel="stylesheet" href="/assets/css/style.css" />
```

```
else if (request.url === "/assets/css/style.css") {
  try {
    const cssFileName = "./public/assets/css/style.css";
    const css = await readFile(cssFileName, { encoding: "utf-8" });

    response.end(css);
  } catch (err) {
    response.statusCode = 404;
    response.end();
  }
}
```

## 5.1 express app - router

main page: /

```
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});
```

http:localhost/greet page

```
app.get("/greet", (req, res) => {
  res.send("Greetings, Earthling!");
});
```
