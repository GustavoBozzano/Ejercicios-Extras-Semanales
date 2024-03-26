import { access, mkdir } from "fs/promises";

//función que comprueba que una ruta existe en disco
const pathExists = async (path) => {
  // async function pathExists(path) {
  try {
    await access(path);
  } catch {
    throw new Error(`La ruta ${path} no existe`);
  }
};

//función que crea una ruta en disco si no existe
const createPathIfNotExists = async (path) => {
  // async function createPathIfNotExists(path) {
  try {
    await access(path);
  } catch {
    await mkdir(path);
  }
};

export { pathExists, createPathIfNotExists };
