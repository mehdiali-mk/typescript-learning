export {};
function identity<T>(item: T): T {
  return item;
}

console.log(identity<number>(5));
console.log(identity(4));
console.log(identity("Mehdiali"));
