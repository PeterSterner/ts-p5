/*
Et eksempel på typescript uden brug af p5.
*/

function helloWorld(name: string) {
    console.log("From " + name + ": Hello world!");
    console.log(window.mousePressed);
}

helloWorld("Peter");


