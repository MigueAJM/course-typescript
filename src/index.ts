let message: string = "Hello world!";
message = "bye!";
console.log(message);
/**
 * Tipos de datos JS
 * * number
 * * string
 * * boolean
 * * null
 * * undefined
 * * object
 * * function
 * Tipos de TS
 * * any
 * * unknown
 * * never
 * * arrays
 * * tuplas
 * * Enums
 * Tipos inferidos
 */

let extincionDinosaurios: number = 76_000_000;
let dinosaurioFavorito: string = "T-Rex";
let extintos: boolean = true;
let variable;
variable = "String";
variable = 42;

function process(config: any) {
  return config;
}

const animal: string[] = ["animal uno", "animal dos", "animal tres"];
const numbers: number[] = [1, 2, 3];
const checks: boolean[] = [true, false];
const numbers_two: Array<number> = [];
// numbers.map(value => value.) el autocompletado sugire metodos de acuerdo al tipo de dato del array

// tupla: variable que conteniene un set de datos ordenados.
const tupla: [number, string[]] = [1, ["Miguel Angel", "Jimenez"]];

// Enumns: Tipo enumerado, una lista de constantes las cuales se pueden referenciar en un futuro.
const small = "s";
const medium = "m";
const large = "l";
const xlarge = "xl";

enum Sizes {
  Small,
  Medium,
  Large,
  Xlarge,
}

const enum LoadingState {
  Idle,
  Loading,
  Success,
  Error,
}

const state = LoadingState.Success;

const objeto: {
  readonly id: number;
  name?: string;
  size: Sizes;
} = {
  id: 1,
  name: "",
  size: Sizes.Small,
};
type Direction = {
  number: number;
  stret: string;
  country: string;
};
type Person = {
  readonly id: number;
  name?: string;
  size: Sizes;
  direction: Direction;
};

const user: Person = {
  id: 1,
  name: "",
  size: Sizes.Small,
  direction: {
    number: 70,
    stret: "Emiliano",
    country: "Mexico",
  },
};
// objeto.id = 1; no marca un error por que solo es de lectura.
objeto.name = "Miguel Angel";
const users: Person[] = [];

const processTwo: (a: number) => string = (age: number) => {
  return age > 17 ? "Enter" : "Exit";
};

function processThree(age: number, message?: string): string {
  if (age > 17) return `Enter ${message}`;
  return "Exit";
}
console.info(processThree(17));
console.info(processThree(18, "Miguel"));