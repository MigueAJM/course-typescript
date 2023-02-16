import * as G from "./Group";
import { Point } from "./Point";
import { Animales, Horses, Dogs } from "./Animales";

const point = new Point(1, 2);

const group = new G.default(1, "migueajm");

console.log(G.defaultGroups.admin);

// wildcard import and re-export

console.log(Animales, Horses, Dogs );
