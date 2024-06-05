import { Router } from "express";

export const routes = new Router();

const guitars = [
  { id: 1, make: "Fender", model: "Strat" },
  { id: 2, make: "PRS", model: "Starla" },
  { id: 3, make: "Gibson", model: "Les Paul" },
  { id: 4, make: "PRS", model: "Vela" },
];

// /guitars
routes.get("/", (req, res) => {
  res.send(guitars);
});

/* route conflict
 routes.get("/:make", (req, res) => {
  res.send("make method");
});
 */
// http://localhost/guitars/1
routes.get("/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (id) {
    const guitar = guitars.find((g) => g.id === id);

    guitar ? res.send(guitar) : res.send(404);
  } // id is null
  else {
    const found = guitars.filter(
      (g) => g.make.toLocaleLowerCase() === req.params.id
    );

    found.length === 0 ? res.send(404) : res.send(found);
  }
});
