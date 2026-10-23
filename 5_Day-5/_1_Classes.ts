class Player {
  first: string;
  last: string;
  protected score: number = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }

  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  set fullName(fullName: string) {
    const parts = (fullName || "").trim().split(/\s+/);

    this.first = parts[0] || "";

    this.last = parts.slice(1).join(" ");
  }
}

class superPlayer extends Player {
  public isAdmin = true;
  constructor(first: string, last: string) {
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
