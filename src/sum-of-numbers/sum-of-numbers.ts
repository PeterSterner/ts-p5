function sumOfNumbers(n: number): number {
  let s = 0;
  for (let i = 1; i <= n; i++) {
    s += i;
  }
  return s;
}

console.log(sumOfNumbers(10));
