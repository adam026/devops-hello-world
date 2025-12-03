Hello DevOps, Hello World Projekt

Ez a projekt egy egyszerű Node.js (Express) alkalmazás, amely bemutatja az alapvető DevOps lépéseket: verziókövetés, buildelés, konténerizálás és Dev Container használata.

Az alkalmazás egyetlen HTTP végponton (/) keresztül elérhető és egyszerű "Hello DevOps, Hello World!" szöveget ad vissza.

1. Kódkészítés és Verziókövetés

A forráskód a server.js és package.json fájlokban található. A verziókövetés Trunk-Based Development elvet követi, a main branch a "trunk".

2. Buildelés

Az alkalmazás buildelése a függőségek telepítését jelenti. A build folyamat jól dokumentált és egyetlen paranccsal elvégezhető:

npm run build

Ez a parancs futtatja a háttérben: npm install (Node.js függőségek telepítése).

3. Futtatás (Helyi)

A buildelés után az alkalmazás a következő paranccsal futtatható:

npm start

Az alkalmazás ekkor elérhető: http://localhost:8080

4. Dockerizálás (Konténerizálás)

Az alkalmazás konténerizálva van, a Dockerfile segítségével egy önálló, futtatható image hozható létre.

Image Build Parancs

Hozzuk létre az image-et a hello-devops névvel és v1 verzióval:

docker build -t hello-devops:v1 .


Konténer Futtatási Parancs

A konténer indításakor automatikusan elindul az alkalmazás. A helyi 8080-as portot a konténer 8080-as portjára képezzük le:

docker run -p 8080:8080 hello-devops:v1

A futó konténerből az alkalmazás elérhető: http://localhost:8080


5. Dev Container (Választható Feladat)

Ez a projekt támogatja a VS Code Dev Containers és a GitHub Codespaces használatát, ami egy egységes fejlesztői környezetet biztosít mindenki számára.

Indítás Dev Containerben

VS Code-ban: Telepítsd a "Dev Containers" kiterjesztést.

Nyisd meg a projektet, és a VS Code felajánlja az "Újranyitás konténerben" opciót.

Kattints erre, és a VS Code felépíti és elindítja a fejlesztői konténert.

A Dev Containeren belül az alkalmazás buildelhető és futtatható:

# Buildelés (függőségek telepítése)
npm run build

# Futtatás
npm start