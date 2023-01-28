// DESESTRUCTURACIÓN DE OBJETOS
interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}

interface Detalles {
  autor: string;
  anio: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: "dani california",
  detalles: {
    autor: "rhcp",
    anio: 2006,
  },
};

const {
  volumen: vol,
  segundo,
  cancion,
  detalles: { autor: autorDetalle },
} = reproductor;
// const { autor } = detalles;

// console.log("El volumen actual es de:", vol);
// console.log("El segundo actual es de:", segundo);
// console.log("El canción actual es de:", cancion);
// console.log("El autor es:", autorDetalle);

// DESTRUCTURACIÓN DE ARREGLOS
const dbz: string[] = ["Goku", "Vegeta", "Trunks"];
const [, , p3] = dbz;

// console.log("Personaje 1:", dbz[0]);
// console.log("Personaje 2:", dbz[1]);
console.log("Personaje 3:", p3);
