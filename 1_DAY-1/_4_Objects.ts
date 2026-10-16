export {};

function printName(person: { firstName: string; lastName: string }): void {
  console.log(`${person.firstName} ${person.lastName}`);
}

let person1: { firstName: string; lastName: string } = {} as any;

person1.firstName = "Mehdiali";
person1.lastName = "Kadiwala";

printName(person1);

let coordinates: { x: number; y: number } = {} as any;

function randomCoordinates(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

coordinates = randomCoordinates();

console.log(coordinates);

type Credits = {
  producerName?: string;
  writerName?: string;
  editorName?: string;
};

type Song = {
  title: string;
  artists: string[];
  totalNumberOfPayloads?: number;
  credits?: Credits;
};

function printSong(mySong: Song): string {
  return `${mySong.title} - ${mySong.artists}`;
}

const mySong: Song = {
  title: "Aaj ki Raat",
  artists: ["Ahesanali", "Nafeesafatema"],
  totalNumberOfPayloads: 4500,
  credits: {
    producerName: "Mehdiali",
    editorName: "Saberafatema",
  },
};

console.log(printSong(mySong));
