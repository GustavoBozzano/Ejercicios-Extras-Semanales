const names = [
  "A-Jay",
  "Manuel",
  "Manuel",
  "Eddie",
  "A-Jay",
  "Su",
  "Reean",
  "Manuel",
  "A-Jay",
  "Zacharie",
  "Zacharie",
  "Tyra",
  "Rishi",
  "Arun",
  "Kenton",
];

// Escribe aquí tu código
function sinDupl(name) {
  const namesSinDupl = [];
  for (let i = 0; i < name.length; i++) {
    if (namesSinDupl.indexOf(name[i]) === -1) {
      namesSinDupl.push(name[i]);
    }
  }
  return namesSinDupl;
}
const newNames = sinDupl(names);
console.log(newNames);
