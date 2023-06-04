import { sumOfNumbers } from "./sum-of-numbers";

let hello = "Hello World!"

function preload() {

}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(220);
    textSize(24);
    textAlign(CENTER, CENTER);
    text(hello + "\n" + sumOfNumbers(10), windowWidth / 2, windowHeight / 2);
}

export { setup, draw, preload }