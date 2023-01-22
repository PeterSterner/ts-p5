# Formål

Dette projekt har til formål at få p5.js til at fungere sammen med typescript.

# Opsætning

- Installér Visual Studio Code [https://code.visualstudio.com/](https://code.visualstudio.com/).
- Installér node.js [https://nodejs.org/en/](https://nodejs.org/en/).
- Åbn Visual Studio Code.
- Åbn kommando-paletten (Win: Ctrl+Shift+P, Mac: Cmd+Shift+P).
- Klon projektet. Det kan gøres på en af følgende måder:

  1. Fra kommando-paletten i Visual Studio Code vælges `Git: Clone`.
  2. Fra en terminal køres kommandoen: 
     ```
     git clone https://github.com/petey33/ts-p5
     ```
- Installér projektets afhængigheder (enten fra kommando-paletten med `Run task` eller fra en terminal):
  ```
  npm install
  ```  
- Kør nu følgende script for at starte en webserver, der viser en p5-sketch fra `sketch.ts`:
  ```
  npm run sketch
  ```  
- Hvis man ønsker en simpel console-applikation (dvs. en applikation, der kun giver output i terminal) kan følgende script køres:
  ```
  npm run console
  ```
# Nyt p5-projekt

1. Opret en ny fil i mappen `src`. Kald f.eks. denne for `min-sketch.ts`
2. Tilføj noget kode til `min-sketch.ts`. Det kunne f.eks. være:  
```
import "p5";

function preload(){

}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  circle(windowWidth / 2, windowHeight / 2, 50);
}

export { setup, draw };
```
3. Åbn filen `sketch.ts` som ligger i mappen `src` og tilføj følgende:
```
import { setup, draw} from "./min-sketch";
```
Husk at udmarkere eventuelle andre `import`-sætninger.

4. Du kører din sketch ved at åbne fanen `Terminal`, vælge `Run Task` og herefter `npm`. Herunder vælges `npm run sketch`.

# Nyt console-projekt

1. Åbn filen `console.ts` som ligger i mappen `src`.
2. Tilføj noget kode til `console.ts`. Det kunne f.eks. være:
```
console.log('Hej verden!')
```
3. Du kører din sketch ved at åbne fanen `Terminal`, vælge `Run Task` og herefter `npm`. Herunder vælges `npm run console`.