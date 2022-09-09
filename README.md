# Formål

Dette projekt har til formål at få p5.js til at fungere sammen med typescript.

# Opsætning

- Installér Visual Studio Code [https://code.visualstudio.com/](https://code.visualstudio.com/).
- Installér node.js [https://nodejs.org/en/](https://nodejs.org/en/).
- Åbn Visual Studio Code.
- Åbn kommando-paletten (Win: Ctrl+Shift+P, Mac: Cmd+Shift+P).
- Nu skal dette projekt klones. Det kan gøres på en af følgende måder:
  1. Fra kommando-paletten i Visual Studio Code køres kommandoen `Git: Clone`.
  2. Fra en terminal: `git clone https://github.com/petey33/vscode-ts-javascript-setup`.
- Start en terminal.
- Installér projektets afhængigheder:
  ```
  npm install
  ```
- Kør følgende script for at vise en p5-sketch:
  ```
  npm sketch
  ```
  Kommandoen `parcel index.html --open` køres (jf. `package.json`) og p5-sketch fra `sketch.ts` vises.
- Hvis man ønsker en simpel console-applikation (dvs. en applikation, der kun giver output i terminal) kan følgende script køres:
  ```
  npm console
  ```
