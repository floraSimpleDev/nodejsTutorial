import { Router } from "express";
import {
  listGuitars,
  showGuitar,
  createGuitar,
  storeGuitar,
} from "./controller.js";

export const routes = new Router();

// /guitars
routes.get("/", listGuitars);

routes.post("/", storeGuitar);

routes.get("/create", createGuitar);

// http://localhost/guitars/1
routes.get("/:id", showGuitar);
