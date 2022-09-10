import "p5";
import { Image } from "p5";

let img: Image;

function preload() {
  console.log("preload");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  circle(windowWidth / 2, windowHeight / 2, 50);
}

function mousePressed() {
  console.log("You clicked the mouse!");
}

function keyPressed() {
  console.log("You pressed a key!");
}

export { preload, setup, draw, mousePressed, keyPressed };
