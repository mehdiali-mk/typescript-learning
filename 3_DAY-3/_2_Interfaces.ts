interface Product {
  name: string;
  price: number;
  applyDiscount(percentage: number): number;
}

let product1: Product = {
  name: "Coco cola",
  price: 320,
  applyDiscount(percentage: number) {
    this.price = this.price * (1 - 20 / 100);
    return this.price;
  },
};

product1.applyDiscount(20);
console.log(product1);

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

interface ServiceDog extends Dog {
  job: "Drug Sniffing" | "Bomb Squad" | "Guiding";
}

let james: ServiceDog = {
  name: "JamesBond",
  age: 1.5,
  breed: "Pitbull",
  bark() {
    return "WOOF WOOF!";
  },
  job: "Drug Sniffing",
};

console.log(james);
