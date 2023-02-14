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
