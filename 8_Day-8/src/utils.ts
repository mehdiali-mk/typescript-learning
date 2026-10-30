export function add(num1: number, num2: number) {
  return num1 + num2;
}

export function multiply(num1: number, num2: number) {
  return num1 * num2;
}

export function divide(num1: number, num2: number) {
  if (num2 !== 0) {
    return num1 / num2;
  }
}

export function subtraction(num1: number, num2: number) {
  return num1 - num2;
}
