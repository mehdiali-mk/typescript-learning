function printName(person) {
  console.log(`${person.firstName} ${person.lastName}`);
}
let person1 = {};
person1.firstName = "Mehdiali";
person1.lastName = "Kadiwala";
printName(person1);
let coordinates = {};
function randomCoordinates() {
  return { x: Math.random(), y: Math.random() };
}
coordinates = randomCoordinates();
console.log(coordinates);
function printSong(mySong) {
  return `${mySong.title} - ${mySong.artists}`;
}
const mySong = {
  title: "Aaj ki Raat",
  artists: ["Ahesanali", "Nafeesafatema"],
  totalNumberOfPayloads: 4500,
  credits: {
    producerName: "Mehdiali",
    editorName: "Saberafatema",
  },
};
console.log(printSong(mySong));
export {};
