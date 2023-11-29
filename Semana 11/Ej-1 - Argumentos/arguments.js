import chalk from "chalk";

const argu1 = process.argv[2];
const argu2 = process.argv[3];
const fecha = new Date();
const h_Now = fecha.getHours();
const m_Now = fecha.getMinutes();
const s_Now = fecha.getSeconds();

if (argu1 === "--dirname" && argu2 === "--time") {
  // Ruta absoluta del directorio que contiene el archivo en ejecución.
  console.log(chalk.blue(process.argv[1]));
  // Hora actual del sistema.
  console.log(chalk.blue(`${h_Now}:${m_Now}:${s_Now}`));
} else if (argu1 === "--dirname") {
  console.log(chalk.blue(process.argv[1]));
} else if (argu1 === "--time") {
  console.log(chalk.blue(`${h_Now}:${m_Now}:${s_Now}`));
} else {
  console.error(chalk.red(`El argumento ${argu1} no es válido`));
}
