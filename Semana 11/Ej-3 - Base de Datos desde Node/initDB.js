import getPool from "./getpool.js";

const initDB = async () => {
  try {
    let pool = await getPool();

    console.log("Elimando base de datos...");
    await pool.query("DROP DATABASE IF EXISTS bootcamp");

    console.log("Creando base de datos...");
    await pool.query("CREATE DATABASE bootcamp");

    await pool.query("USE bootcamp");

    console.log("Eliminando tablas...");
    await pool.query("DROP TABLE IF EXISTS estudiantes, direcciones");

    console.log("Creando tablas...");

    await pool.query(`
          CREATE TABLE IF NOT EXISTS direcciones (
              id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
              calle VARCHAR(100) NOT NULL,
              codigo_postal INT UNSIGNED NOT NULL
          )
      `);
    await pool.query(`
          CREATE TABLE IF NOT EXISTS estudiantes (
              id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
              nombre VARCHAR(100) NOT NULL,
              apellido VARCHAR(100) NOT NULL,
              fecha_nacimiento INT UNSIGNED NOT NULL,
              id_direccion INT UNSIGNED,
              FOREIGN KEY (id_direccion) REFERENCES direcciones(id)
      )
  `);
  } catch (error) {
    console.log(error);
  }
};
export default initDB;
