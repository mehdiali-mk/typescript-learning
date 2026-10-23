class Player {
    first;
    last;
    score = 0;
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    set fullName(fullName) {
        const parts = (fullName || "").trim().split(/\s+/);
        this.first = parts[0] || "";
        this.last = parts.slice(1).join(" ");
    }
}
class superPlayer extends Player {
    isAdmin = true;
    constructor(first, last) {
        super(first, last);
        this.score = 9999;
    }
}
const player1 = new Player("Mehdiali", "Kadiwala");
console.log(player1.fullName);
player1.fullName = "Ahesanali Kadiwala";
console.log(player1.fullName);
const proPlayer = new superPlayer("Saberafatema", "Kadiwala");
console.log(proPlayer.fullName);
export {};
