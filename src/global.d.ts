import "p5/global";

declare global {
  interface Window {
    draw: () => void;
    setup: () => void;
    mousePressed: () => void;
    preload: () => void;
    keyPressed: () => void;
  }
}
