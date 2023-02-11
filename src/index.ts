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
