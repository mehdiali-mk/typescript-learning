export {};

let highScore: number | boolean;

highScore = 99;
highScore = true;

let stuff: number[] | string[] = [4, 2, 3];

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: "ski" | "snowboard";
  level: SkillLevel;
};

type RGBColor = {
  r: number;
  b: number;
  g: number;
};

type HSLColor = {
  h: number;
  s: number;
  l: number;
};

let colors: (RGBColor | HSLColor)[] = [];

function greet(names: string | string[]) {
  if (Array.isArray(names)) {
    names.forEach((name) => console.log(`Hello, ${name}`));
  } else {
    console.log(`Hello, ${names}`);
  }
}
greet("Mehdiali");
greet(["Ahesanali", "Saberafatema", "Nafeesa"]);
