import "p5";
import { Color } from "p5";

let liste: Cirkel[] = [];
let runSimulation: boolean = true;

let N = 5000;

class Cirkel {
  public x: number;
  public y: number;
  public d: number;
  public a: number;
  public b: number;
  public f: Color;

  constructor(x: number, y: number, d: number, a: number, b: number) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.a = a;
    this.b = b;
    this.f = color(random(255), random(255), random(255));
  }

  draw() {
    fill(this.f);
    circle(this.x, this.y, this.d);
    this.x += this.a;
    this.y += this.b;
  }
}

function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let index = 0; index < N; index++) {
    let cirkel = new Cirkel(
      windowWidth / 2,
      windowHeight / 2,
      20,
      random(-10, 10),
      random(-10, 10)
    );
    liste.push(cirkel);
  }
}

function draw() {
  if (runSimulation) {
    for (let index = 0; index < N; index++) {
      liste[index].draw();
    }
  }
}

function mousePressed() {
  runSimulation = !runSimulation;
}

export { preload, setup, draw, mousePressed };
