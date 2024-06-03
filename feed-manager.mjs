//__filename: global variable, dir+file name
//__dirname: global variable, dir name

import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { access, constants, writeFile, readFile } from "fs/promises";

const __filename = fileURLToPath(import.meta.url); //obtain the absolute directory+file of this file
const __dirname = dirname(__filename); //obtain the absolute directory of this file
const jsonFile = join(__dirname, "feeds.json"); //D:\Web_full_stack\5_nodejs\nodejsTutorial\feeds.json

//console.log(jsonFile);

export async function getLinks() {
  try {
    await access(jsonFile, constants.F_OK);
  } catch (error) {
    await writeFile(jsonFile, JSON.stringify([])); //utf-8
  }

  const contents = await readFile(jsonFile, { encoding: "utf8" });

  return JSON.parse(contents);
}

export async function saveLinks(links) {
  await writeFile(jsonFile, JSON.stringify(links));
}
