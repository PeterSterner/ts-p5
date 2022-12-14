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
