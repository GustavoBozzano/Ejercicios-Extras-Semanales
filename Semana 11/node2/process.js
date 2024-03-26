import minimist from "minimist";
import chalk from "chalk";
import { resolve, extname } from "path";
import { readdir } from "fs/promises";
import sharp from "sharp";
import path from "path";

import { pathExists, createPathIfNotExists } from "./helpers.js";

console.log(chalk.green(`Welcome to Image Process v1.0`));
console.log();

//Esta función hace el trabajo de procesado
async function processImages({ inputDir, outputDir, watermark, resize }) {
  try {
    const __dirname = path.resolve(".");

    const inputPath = path.resolve(__dirname, inputDir);
    const outputPath = path.resolve(__dirname, outputDir);
    let watermarkPath;

    if (watermark) {
      watermarkPath = path.resolve(__dirname, watermark);
    }

    //Comprobar que inputDir existe
    await pathExists(inputPath);

    //Crear si no existe outputDir
    await createPathIfNotExists(outputPath);

    //Si existe watermark colocar comprobar que el archivo watermark existe
    if (watermarkPath) {
      await pathExists(watermarkPath);
    }

    //Leer los archivos de inputPath
    const inputFiles = await readdir(inputPath);

    //Quedarme solo con los archivos que sean imágenes
    const imageFiles = inputFiles.filter((file) => {
      const validExtensions = [".jpg", ".jpeg", ".gif", ".png", ".webp"];

      return validExtensions.includes(extname(file).toLowerCase());
    });

    //Recorrer toda la lista de archivos y:
    // - Si existe "resize" redimensionar cada una de las imágenes
    // - Si existe "watermark" colocar el watermark en la parte inferior derecha de la imagen
    // - Guardar la imágen resultante en outputDir

    for (const imageFile of imageFiles) {
      console.log(chalk.blue(`Procesando imagen: ${imageFile}`));
      //Creamos la ruta completa de la imagen
      const imagePath = path.resolve(inputPath, imageFile);

      //Cargamos la imagen en sharp
      const image = sharp(imagePath);

      //Si existe resize hacemos el resize
      if (resize) {
        image.resize(resize);
      }

      //Si existe watermarkPath colocamos el watermark

      if (watermarkPath) {
        image.composite([
          {
            input: watermarkPath,
            top: 5,
            left: 5,
          },
        ]);
      }

      //Guardamos la imagen con otro nombre en outputPath
      await image.toFile(path.resolve(outputPath, `processed_${imageFile}`));
    }
    console.log();
    console.log(
      chalk.green(
        `Todo finalizado, tus imágenes están en el directorio ${outputDir}`
      )
    );
  } catch (error) {
    console.error(chalk.red(error.message));
    console.error(chalk.red("Comprueba que los argumentos sean correctos!"));
    process.exit(1);
  }
}

//Proceso los argumentos
const args = minimist(process.argv.slice(2));
const { inputDir, outputDir, watermark, resize } = args;

//Si no existe inputDir o outputDir muestro error y salgo del programa
if (!inputDir || !outputDir) {
  console.error(
    chalk.red("Los argumentos --inputDir y --outputDir son obligatorios")
  );
  process.exit(1);
}

//Si no existe watermark y no existe resize muestro error y salgo del programa
if (!watermark && !resize) {
  console.error(
    chalk.red("Es necesario que exista un argumento --watermark o --resize")
  );
  process.exit(1);
}

//Todos los argumentos están correctos, seguimos
console.log(chalk.green("Procesando imágenes..."));
console.log();

processImages({ inputDir, outputDir, watermark, resize });
