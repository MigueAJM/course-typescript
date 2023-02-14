interface Animal {
  name: string;

  walk(): void;
  onomatopeya(): string;
}

class Horse implements Animal {
  name: string = "Spirit";

  walk(): void {
    console.log("Walking");
  }

  onomatopeya(): string {
    return "hin";
  }
}

class Cerdo implements Animal {
  name: string = "Chanchito feliz";

  walk(): void {
    console.log("Walking");
  }

  onomatopeya(): string {
    return "oin";
  }
}

class Dog implements Animal {
  name: string = "Chanchito feliz";

  walk(): void {
    console.log("Walking");
  }

  onomatopeya(): string {
    return "oin";
  }
}

class DictionaryUser {
  [id: string]: string;
}

const dictionary_user = new DictionaryUser();
dictionary_user["1a"] = "user 1";
dictionary_user["2a"] = "user 2";
console.log(dictionary_user);
