import { sumOfNumbers } from "./sum-of-numbers/sum-of-numbers";
import { sayHello } from "./helloworld/helloworld";

console.clear();
sayHello("Peter");
console.log("Computing the sum of 1+2+...+100: ", sumOfNumbers(100));
