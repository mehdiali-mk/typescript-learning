const mehdiali = {
  id: 123456,
  first: "Mehdiali",
  last: "Kadiwala",
  nickname: "MKDJ",
  sayHi: () => {
    return "Hello!";
  },
  sayGoodBye: (name) => {
    return name ? `Goodbye, ${name}` : `Goodbye!`;
  },
};
console.log(mehdiali.sayHi());
console.log(mehdiali.sayGoodBye("Ahesanali"));
console.log(mehdiali.sayGoodBye());
export {};
