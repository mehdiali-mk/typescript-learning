export {};

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  sayHi: () => string;
  sayGoodBye: (name?: string) => string;
}

const mehdiali: Person = {
  id: 123456,
  first: "Mehdiali",
  last: "Kadiwala",
  nickname: "MKDJ",
  sayHi: () => {
    return "Hello!";
  },
  sayGoodBye: (name?: string) => {
    return name ? `Goodbye, ${name}` : `Goodbye!`;
  },
};

console.log(mehdiali.sayHi());
console.log(mehdiali.sayGoodBye("Ahesanali"));
console.log(mehdiali.sayGoodBye());
