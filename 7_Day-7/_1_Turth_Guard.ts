export {};

const printLetter = (word: string | null) => {
  if (!word) {
    console.log("No Word is provided.");
  } else {
    word.split("").forEach((letter) => {
      console.log(letter);
    });
  }
};

console.log(printLetter("Mehdiali"));
