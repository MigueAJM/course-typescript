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
// interface UserTwo {
//   id: string;
//   name: string;
// }

class UserTwo {
  constructor(public id: string) {}
}
function print<T extends UserTwo>(t: T): T {
  console.log(t);
  return t;
}

print({ id: "1", name: "migueajm" });

class State<T> {
  protected data: T[] = [];

  add(t: T): void {
    this.data.push(t);
  }
  get state(): T[] {
    return this.data;
  }
}

type ObjectId = {
  id: string;
};
class StateRemove<T extends ObjectId> extends State<T> {
  remove(id: string) {
    this.data = this.data.filter((x) => x.id !== id);
  }
}

class StateUser extends State<UserTwo> {
  resetPassword(): void {}
}

const state_user = new StateUser();
