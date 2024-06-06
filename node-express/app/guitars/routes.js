import { Router } from "express";
import { listGuitars, showGuitar } from "./controller.js";

export const routes = new Router();

// /guitars
routes.get("/", listGuitars);

/* route conflict
 routes.get("/:make", (req, res) => {
  res.send("make method");
});
 */
// http://localhost/guitars/1
routes.get("/:id", showGuitar);
