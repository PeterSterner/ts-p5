import "p5";

//import { setup, draw, mousePressed } from "./explosion/eksplosion";
import {
  setup,
  draw,
  mousePressed,
  keyPressed,
} from "./default-sketch/default-sketch";

window.preload = function preload() {
  console.log("preload");
  loadImage("./eksplosion.png");
};

window.setup = setup;
window.draw = draw;
window.mousePressed = mousePressed;
window.keyPressed = keyPressed;
