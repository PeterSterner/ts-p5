/*
Et eksempel på typescript uden brug af p5.

For at køre koden nedenfor i VSCode gør da følgende:

1) Ctrl+Shift+B.
2) Vælg tsc: watch - tsconfig.json
3) 


*/

function helloWorld(name: string) {
    console.log("From " + name + ": Hello world!");
    console.log(window.mousePressed);
}

helloWorld("Peter");


