import "p5";

window.mousePressed = () => {
  fill("blue");
  ellipse(mouseX, mouseY, 50, 50);
};

window.setup = () => {
  createCanvas(windowWidth, windowHeight);
  background(220);
};

window.draw = () => {
  circle(windowWidth / 2, windowHeight / 2, 50);
  fill("red");
  if (mouseIsPressed) {
    circle(mouseX, mouseY, 40);
  }
};

function helloWorld(name: string) {
  console.log("From " + name + ": Hello world!");
}

helloWorld("Peter");
