import chalk from "chalk";

try {
  // Obtengo los argumentos a partir de la posición 2 del array de argumentos.
  const argsArr = process.argv.slice(2);

  // Array con los argumentos válidos.
  const validArgs = ["--dirname", "--time"];

  // Lanzo un error si hay argumentos no válidos.
  for (const arg of argsArr) {
    if (!validArgs.includes(arg)) {
      throw new Error(`El argumento "${arg}" no es válido`);
    }
  }

  // Si existe el argumento "--dirname" muestro por consola la ruta absoluta al directorio actual.
  if (argsArr.includes("--dirname")) {
    const dirname = process.cwd();

    console.log(chalk.blue(`Directorio: ${dirname}`));
  }

  // Si existe el argumento "--time" muestro la hora actual en el formato `hh:mm:ss`.
  if (argsArr.includes("--time")) {
    const time = new Date().toLocaleTimeString("es-ES");

    console.log(chalk.blue(`Hora: ${time}`));
  }
} catch (err) {
  console.error(chalk.red(err.message));
}
