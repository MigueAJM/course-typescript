function log<T, V>(a: T, b: V): V {
  console.log(a, b);
  return b;
}

log<string, number>("dato", 12);
log<string, string>("dato", "12");
log("dato", "12");
log("dato", 12);

async function fetchData<T>(resource: string): Promise<T> {
  const response = await fetch(`${resource}`);
  return response.json();
}

type User = {
  id: string;
  name: string;
};

async function main() {
  const user = await fetchData<User>("/user");
  user.name;
}

type Computer = {
  power: () => void;
  down: () => void;
};
class Developer<T> {
  computer: T;
  constructor(t: T) {
    this.computer = t;
  }
}

const developer = new Developer<Computer>({
  power: () => {},
  down: () => {},
});
const developer_two = new Developer<string>("Hello world!");

developer.computer;
developer_two.computer.toLocaleUpperCase();

interface KeyValue<T, V> {
  key: T;
  value: V;
}

interface ProductOne {
  id: string;
}

function fetchProduct(): KeyValue<string, ProductOne> {
  return {
    key: "product id",
    value: { id: "product id" },
  };
}
function fetchStockt(): KeyValue<string, number> {
  return {
    key: "product id",
    value: 45,
  };
}
