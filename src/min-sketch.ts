import "p5";

function preload() {
    
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  circle(windowWidth / 2, windowHeight / 2, 50);
}

export { preload, setup, draw };