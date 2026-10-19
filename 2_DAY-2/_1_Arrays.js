let ages = [];
let board = [[]];
let products = [];
products.push({ name: "Coffee", price: 400 });
products.push({ name: "Tea", price: 350 });
function getTotal(myProducts) {
  let total = 0;
  for (const product of myProducts) {
    total += product.price;
  }
  return total;
}
console.log(getTotal(products));
export {};
