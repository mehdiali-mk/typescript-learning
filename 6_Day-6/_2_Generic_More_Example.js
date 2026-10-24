function getRandomElement(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}
const myCats = [];
myCats.push({ name: "Oliver", breed: "Maine Coon" });
myCats.push({ name: "Bella", breed: "Siamese" });
myCats.push({ name: "Leo", breed: "British Shorthair" });
myCats.push({ name: "Chloe", breed: "Ragdoll" });
myCats.push({ name: "Milo", breed: "Ragdoll" });
console.log(getRandomElement(myCats));
console.log(
  getRandomElement([12, 31, 51, 61, 82, 91, 463, 465, 894, 354, 165, 765]),
);
console.log(getRandomElement(["Hi", "Bye", "Good", "Having", "Done"]));
console.log(getRandomElement(["Hi", 123, true, false, 786, "Mehdiali"]));
export {};
