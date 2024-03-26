import getPool from "./getpool.js";
import "dotenv/config";

const { MYSQL_DATABASE } = process.env;

const initDB = async () => {
  try {
    const pool = await getPool();

    console.log("Elimando base de datos...");
    await pool.query(`DROP DATABASE IF EXISTS ${MYSQL_DATABASE}`);

    console.log("Creando base de datos...");
    await pool.query(`CREATE DATABASE ${MYSQL_DATABASE}`);

    await pool.query(`USE ${MYSQL_DATABASE}`);

    console.log("Eliminando tablas...");
    await pool.query("DROP TABLE IF EXISTS addresses, students");

    console.log("Creando tablas...");

    await pool.query(`
    CREATE TABLE IF NOT EXISTS students (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        firstName VARCHAR(50) NOT NULL,
        lastName VARCHAR(100) NOT NULL, 
        birthDate DATETIME NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`);

    await pool.query(`
    CREATE TABLE IF NOT EXISTS addresses (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        studentId INT UNSIGNED NOT NULL,
        street VARCHAR(255) NOT NULL,
        postalCode VARCHAR(10) NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (studentId) REFERENCES students (id)
    )
`);
  } catch (error) {
    console.log(error);
  }
};
export default initDB;
