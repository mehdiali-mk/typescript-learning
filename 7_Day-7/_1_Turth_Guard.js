const printLetter = (word) => {
    if (!word) {
        console.log("No Word is provided.");
    }
    else {
        word.split("").forEach((letter) => {
            console.log(letter);
        });
    }
};
console.log(printLetter("Mehdiali"));
export {};
