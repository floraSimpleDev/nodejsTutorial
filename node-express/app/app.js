import express from "express";
import { routes as guitarRoutes } from "./guitars/routes.js";

const app = express();

//using static assets
app.use(express.static("./public"));

// parse enqury into form
app.use(express.urlencoded({ extended: false }));

app.use("/guitars", guitarRoutes);

app.get("/", (req, res) => {
  res.send("Home Page");
});

// /-- Home Page
// /guitars -- index page/list
// /guitars/id -- individual guitar by id

export function start() {
  app.listen(80, () => {
    console.log("Listening at http://localhost");
  });
}
