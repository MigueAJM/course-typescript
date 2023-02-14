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
