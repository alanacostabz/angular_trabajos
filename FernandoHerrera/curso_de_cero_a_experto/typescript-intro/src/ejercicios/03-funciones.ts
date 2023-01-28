// FUNCIONES BÁSICAS
function sumar(a: number, b: number): number {
  return a + b;
}

// declaración arrow function
const sumarFlecha = (a: number, b: number): number => {
  return a + b;
};

function multiplicar(
  numero: number,
  otroNumero?: number,
  base: number = 2
): number {
  return numero * base;
}

// const resultado = multiplicar(5, 0, 10);
// console.log(resultado);

// FUNCIONES CON OBJETOS COMO ARGUMENTOS

interface PersonajeLOR {
  nombre: string;
  pv: number;
  mostarHp: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {
  personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeLOR = {
  nombre: "alan",
  pv: 50,
  mostarHp() {
    console.log("Puntos de vida:", this.pv);
  },
};

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostarHp();
