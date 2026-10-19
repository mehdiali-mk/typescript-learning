let highScore;
highScore = 99;
highScore = true;
let stuff = [4, 2, 3];
let colors = [];
function greet(names) {
  if (Array.isArray(names)) {
    names.forEach((name) => console.log(`Hello, ${name}`));
  } else {
    console.log(`Hello, ${names}`);
  }
}
greet("Mehdiali");
greet(["Ahesanali", "Saberafatema", "Nafeesa"]);
export {};
