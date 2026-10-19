export {};

let ages: number[] = [];
let board: number[][] = [[]];

type Product = {
  name: string;
  price: number;
};

let products: Product[] = [];

products.push({ name: "Coffee", price: 400 });
products.push({ name: "Tea", price: 350 });

function getTotal(myProducts: Product[]): number {
  let total: number = 0;
  for (const product of myProducts) {
    total += product.price;
  }

  return total;
}

console.log(getTotal(products));
