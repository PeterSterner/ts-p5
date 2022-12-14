import "p5";
import { Image } from "p5";

let img: Image;

function preload() {
  console.log("preload");
  img = loadImage("explosion.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  circle(windowWidth / 2, windowHeight / 2, 50);
  image(img, 0, 0);
}

function mousePressed() {
  console.log("You clicked the mouse!");
}

function keyPressed() {
  console.log("You pressed this key: ", key);
}

export { preload, setup, draw, mousePressed, keyPressed };
