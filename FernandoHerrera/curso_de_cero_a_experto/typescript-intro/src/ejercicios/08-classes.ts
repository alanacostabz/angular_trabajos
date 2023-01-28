// CLASES BÁSICAS
class PersonaNormal {
  constructor(public nombre: string, public direccion: string) {}
}

// EXTENDER UNA CLASE
class Heroe extends PersonaNormal {
  // alterEgo: string;
  // edad: number;
  // nombreReal: number;

  // constructor(alterEgo: string, edad: number, nombreReal: number) {
  //   this.alterEgo = alterEgo;
  // }

  // CONSTRUCTOR DE UNA CLASE
  constructor(
    public alterEgo: string,
    public edad?: number,
    public nombreReal?: string
  ) {
    super(nombreReal, "new york, usa");
  }

  imprimirNombre() {
    return this.alterEgo + " " + this.nombreReal;
  }
}

const ironman = new Heroe("ironman", 45, "tony");

console.log(ironman);
