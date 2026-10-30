import Dog from "./Dog.js";

export default class ShelterDog extends Dog {
  constructor(
    public name: string,
    public breed: string,
    public age: number,
    public shelter: string,
  ) {
    super(name, breed, age);
  }

  bark(): void {
    console.log("WooooF WooooF!");
  }
}
