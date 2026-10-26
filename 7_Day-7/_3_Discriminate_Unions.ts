export {};

interface Rooster {
  name: string;
  age: number;
  weight: number;
  kind: "rooster";
}

interface Cow {
  name: string;
  age: number;
  weight: number;
  kind: "cow";
}

interface Goat {
  name: string;
  age: number;
  weight: number;
  kind: "goat";
}

type FarmAnimals = Rooster | Cow | Goat;

function getFarmAnimalSound(animal: FarmAnimals): string {
  switch (animal.kind) {
    case "goat":
      return "Oink!";
    case "cow":
      return "Moooo!";
    case "rooster":
      return "Cockadoodledoo!";
    default:
      return "Roar!";
  }
}

const animals: FarmAnimals[] = [
  { name: "Rowdy", age: 2, weight: 4.5, kind: "rooster" },
  { name: "Bessie", age: 5, weight: 720, kind: "cow" },
  { name: "Billy", age: 3, weight: 65, kind: "goat" },
  { name: "Clucky", age: 1, weight: 3.8, kind: "rooster" },
  { name: "Clarabelle", age: 4, weight: 680, kind: "cow" },
  { name: "Nanny", age: 6, weight: 58, kind: "goat" },
  { name: "Strut", age: 3, weight: 5.1, kind: "rooster" },
  { name: "Daisy", age: 2, weight: 610, kind: "cow" },
  { name: "Scruffy", age: 4, weight: 70, kind: "goat" },
  { name: "Penelope", age: 7, weight: 750, kind: "cow" },
];

animals.forEach((animal) => {
  const sound = getFarmAnimalSound(animal);
  console.log(`${animal.name} the ${animal.kind} says: "${sound}"`);
});
