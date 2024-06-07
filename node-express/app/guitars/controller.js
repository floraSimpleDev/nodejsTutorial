import { getAll, getById, getByMake } from "./model.js";
import { view } from "./view.js";

export async function createGuitar(req, res) {
  res.send(view("form"));
}

export async function listGuitars(req, res) {
  const guitars = await getAll();
  res.send(view("list", { guitars, title: "My Guitars" }));
}

export async function showGuitar(req, res) {
  const id = parseInt(req.params.id);

  if (id) {
    const guitar = await getById(id);

    guitar ? res.send(view("show", { guitar })) : res.send(404);
  } else {
    const found = await getByMake(req.params.id);

    found.length === 0
      ? res.send(404)
      : res.send(
          view("list", {
            guitars: found,
            title: `Guitars Made By ${found[0].make}`,
          })
        );
  }
}
