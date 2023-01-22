import "p5";

import { preload, setup, draw } from "./min-sketch";

/*
import { preload, setup, draw, mousePressed, keyPressed, } from "./explosion/eksplosion";
import { setup, draw, preload } from "./js-sketch/sketch.js"
import { preload, setup, draw, mousePressed, keyPressed, } from "./default-sketch/default-sketch";
*/

window.preload = preload;
window.setup = setup;
window.draw = draw;
window.mousePressed = mousePressed;
window.keyPressed = keyPressed;
