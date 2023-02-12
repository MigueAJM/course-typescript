// let message: string = "Hello world!";
// message = "bye!";
// console.log(message);
// /**
//  * Tipos de datos JS
//  * * number
//  * * string
//  * * boolean
//  * * null
//  * * undefined
//  * * object
//  * * function
//  * Tipos de TS
//  * * any
//  * * unknown
//  * * never
//  * * arrays
//  * * tuplas
//  * * Enums
//  * Tipos inferidos
//  */

// let extincionDinosaurios: number = 76_000_000;
// let dinosaurioFavorito: string = "T-Rex";
// let extintos: boolean = true;
// let variable;
// variable = "String";
// variable = 42;

// function process(config: any) {
//   return config;
// }

// const animal: string[] = ["animal uno", "animal dos", "animal tres"];
// const numbers: number[] = [1, 2, 3];
// const checks: boolean[] = [true, false];
// const numbers_two: Array<number> = [];
// // numbers.map(value => value.) el autocompletado sugire metodos de acuerdo al tipo de dato del array

// // tupla: variable que conteniene un set de datos ordenados.
// const tupla: [number, string[]] = [1, ["Miguel Angel", "Jimenez"]];

// // Enumns: Tipo enumerado, una lista de constantes las cuales se pueden referenciar en un futuro.
// const small = "s";
// const medium = "m";
// const large = "l";
// const xlarge = "xl";

// enum Sizes {
//   Small,
//   Medium,
//   Large,
//   Xlarge,
// }

// const enum LoadingState {
//   Idle,
//   Loading,
//   Success,
//   Error,
// }

// const state = LoadingState.Success;

// const objeto: {
//   readonly id: number;
//   name?: string;
//   size: Sizes;
// } = {
//   id: 1,
//   name: "",
//   size: Sizes.Small,
// };
// type Direction = {
//   number: number;
//   stret: string;
//   country: string;
// };
// type Person = {
//   readonly id: number;
//   name?: string;
//   size: Sizes;
//   direction: Direction;
// };

// const user: Person = {
//   id: 1,
//   name: "",
//   size: Sizes.Small,
//   direction: {
//     number: 70,
//     stret: "Emiliano",
//     country: "Mexico",
//   },
// };
// // objeto.id = 1; no marca un error por que solo es de lectura.
// objeto.name = "Miguel Angel";
// const users: Person[] = [];

// const processTwo: (a: number) => string = (age: number) => {
//   return age > 17 ? "Enter" : "Exit";
// };

// function processThree(age: number, message?: string): string {
//   if (age > 17) return `Enter ${message}`;
//   return "Exit";
// }
// console.info(processThree(17));
// console.info(processThree(18, "Miguel"));

// // Tipo Never: Se utiliza cunado una funcion nunca va a alcanzar un punto donde vaya a retornar algo.
// // Se utiliza para cuando se retornan Exceptions.

// function ErrorUser(): never {
//   throw new Error("Error: user invalid.");
// }
// type Developer = {
//   web: {
//     code: string[];
//     framework: string[];
//   };
//   app: {
//     code: string[];
//     framework: string[];
//   };
//   orm: string[];
//   sgbd: string[];
// };
// const MigueAJM: Developer = {
//   web: {
//     code: [
//       "HTML",
//       "CSS",
//       "SAS",
//       "JavaScript",
//       "PHP",
//       "SQL",
//       "TypeScript",
//       "Node JS",
//       "Inertia JS",
//     ],
//     framework: [
//       "Materialize",
//       "Bootstrap",
//       "Laravel",
//       "Symfony",
//       "React",
//       "ExpressJS",
//       "Angular",
//     ],
//   },
//   app: {
//     code: ["kotlin", "JavaScript", "Swift", "TypeScript"],
//     framework: ["Ionic"],
//   },
//   orm: ["Eloquent", "Doctrine", "Sequelize"],
//   sgbd: ["MySQL", "PostgreSQL", "SQL Server"],
// };
// const processFour: (a: Developer) => void = (user: Developer) =>
//   console.log({ user });

// processFour(MigueAJM);

// // Union type: Es cuando se puede utilizar mas de un solo tipo para referirse a una variable.
// let puntaje: number | string = 98;
// puntaje = "Hello world";

// type Animal = {
//   id: number;
//   state: string;
// };

// type User = {
//   id: number;
//   name: string;
// };
// let object_two: Animal | User = { id: 1, state: "", name: "" };

// function proccessFive(n: number | string): number {
//   if (typeof n === "number") return n;
//   return parseInt(n);
// }

// // Intersection type: Nos permiten tener las propiedades de mutiples tipos.
// type Audit = {
//   created_at: string;
//   modified_at: string;
// };

// type Product = {
//   name: string;
// };

// const product: Audit & Product = {
//   created_at: "",
//   modified_at: "",
//   name: "",
// };

// // Literal type:
// type Fibo = 0 | 1 | 2 | 3 | 5;
// const nDeFibo: Fibo = 1;

// // Nullable type:
// function toNumber(s: string | null | undefined) {
//   if (!s) return 0;
//   return parseInt(s);
// }

// const n = toNumber(null);
// const nu = toNumber(undefined);

// // Optional chaining
// function getUser(id: number) {
//   if (id < 0) return null;
//   return {
//     id: 1,
//     name: "Miguel",
//     created_at: new Date(),
//   };
// }

// const user_ = getUser(-1);
// console.log("user: ", user_?.created_at);

// const arr1 = null;
// arr1?.[0];

// const fn1: any = null;
// fn1?.();

// // Nullish coalescing operator:
// const difficulty: number | null = null;
// const user2 = {
//   username: "Miguel",
//   difficulty: difficulty ?? 1,
// };

// // type assertion

// const elem: any = null;
// const elem1 = elem as number;

// const input = document.getElementById("username") as HTMLInputElement;
// const input1 = <HTMLInputElement>document.getElementById("username");
// input.value;

// // type narrowing:
// function lala(x: string | number) {
//   if (typeof x === "number") x.valueOf();
//   if (typeof x === "string") x.concat("");
// }

// // type Unknown
// // function process1(algo: unknown) {
// //   if (typeof algo === "number") algo.valueOf();
// //   if (typeof algo === "string") algo.concat("");
// //   if (algo instanceof String) {
// //     algo.todo();
// //     algo.other();
// //     algo.genkidama();
// //   }
// // }

class Character {
  readonly id: number;
  name: string;
  level: number;
  private _hp: number;
  carrer?: string;

  constructor(id: number, name: string, level: number, hp: number) {
    this.id = id;
    this.name = name;
    this.level = level;
    this._hp = hp;
  }

  upLevel(): number {
    this.level = this.level + 1;
    return this.level;
  }

  changeHP(cantidad: number): number {
    this._hp = this._hp + cantidad;
    return this._hp;
  }
}

const character = new Character(1, "migueajm", 1, 100);
character.upLevel();
character.changeHP(-10);
console.log(character);
