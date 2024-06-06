import { getAll, getById, getByMake } from "./model.js";

export async function listGuitars(req, res) {
  const guitars = await getAll();
  res.send(guitars);
}

export async function showGuitar(req, res) {
  const id = parseInt(req.params.id);

  if (id) {
    const guitar = await getById(id);

    guitar ? res.send(guitar) : res.send(404);
  } else {
    const found = await getByMake(req.params.id);

    found.length === 0 ? res.send(404) : res.send(found);
  }
}
