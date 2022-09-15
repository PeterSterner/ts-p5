import "p5";

import { preload, setup, draw } from "./explosion/eksplosion";

/*
import {
  preload,
  setup,
  draw,
  mousePressed,
  keyPressed,
} from "./default-sketch/default-sketch";
*/

window.preload = preload;
window.setup = setup;
window.draw = draw;
window.mousePressed = mousePressed;
window.keyPressed = keyPressed;
