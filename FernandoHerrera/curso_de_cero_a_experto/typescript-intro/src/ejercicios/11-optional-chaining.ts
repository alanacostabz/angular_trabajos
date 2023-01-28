// ENCADENAMIENTO OPCIONAL
interface Pasajero {
  nombre: string;
  hijos?: string[];
}

const pasajero1: Pasajero = {
  nombre: "bryan",
};

const pasajero2: Pasajero = {
  nombre: "fernanda",
  hijos: ["enzo", "rocio"],
};

function imprimeHijos(pasajero: Pasajero): void {
  const cuantosHijos = pasajero.hijos?.length || 0;

  console.log(cuantosHijos);
}

imprimeHijos(pasajero2);
imprimeHijos(pasajero1);
