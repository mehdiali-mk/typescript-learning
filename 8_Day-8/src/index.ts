import Dog from "./Dog.js";
import { multiply, add, subtraction, divide } from "./utils.js";
import ShelterDog from "./ShelterDog.js";

console.log("4 + 5 = " + add(4, 5));
console.log("4 - 5 = " + subtraction(4, 5));
console.log("4 * 5 = " + multiply(4, 5));
console.log("4 / 5 = " + divide(4, 5));

const streetDog = new Dog("Tommy", "Unknown", 4);

streetDog.bark();
console.log(streetDog.name + " " + streetDog.age);

const myPetDog = new ShelterDog("Tada Kitu", "Pitbull", 12, "Falaknuma");

myPetDog.bark();
