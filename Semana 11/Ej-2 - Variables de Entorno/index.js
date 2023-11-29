import "dotenv/config";
const mode = process.env.MODE;

if (mode === "development") {
  console.log("el modo activado es el de desarrollo");
} else if (mode === "production") {
  console.log("el modo activado es el de producción");
} else {
  console.log(
    "Por favor, establece la variable de entorno MODE a 'development' o 'production'"
  );
}
