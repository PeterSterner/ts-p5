import "p5";

window.setup = () => {
  createCanvas(windowWidth, windowHeight);
  background(220);
};

window.draw = () => {
  circle(windowWidth / 2, windowHeight / 2, 50);
};

function helloWorld(name: string) {
  console.log("From " + name + ": Hello world!");
}

helloWorld("Peter");
