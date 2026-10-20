"use strict";
let product1 = {
  name: "Coco cola",
  price: 320,
  applyDiscount(percentage) {
    this.price = this.price * (1 - 20 / 100);
    return this.price;
  },
};
product1.applyDiscount(20);
console.log(product1);
