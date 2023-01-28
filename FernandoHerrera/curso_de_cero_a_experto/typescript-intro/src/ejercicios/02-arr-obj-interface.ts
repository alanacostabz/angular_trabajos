// ARREGLOS: es una colección de objetos que en teoría tienen algo en común
// declaración de arreglos
let habilidades: string[] = ["fernanda", "carolina", "alejandra"];

//habilidades.push(3);

// OBJETOS
// declaracion de objetos
// una interfaz no es mas que una serie de llaves para asegurarnos que el código sea como nosotros queramos

// INTERFACE
interface Personaje {
  nombre: string;
  hp: number;
  habilidades: string[];
  puebloNatal?: string;
}

const personaje: Personaje = {
  nombre: "ronaldo",
  hp: 100,
  habilidades: ["dribbling", "pace", "shooting"],
};

personaje.puebloNatal = "pueblo paleta";

console.table(personaje);
