# Inhalte Termin 2

## HTML-Seite - Gerüst
Wir hatten im ersten Teil gelernt, dass JavaScript normalerweise im Browser von der JavaScript-Engine ausgeführt wird. Dazu muss euer JavaScript-Quelltext in ein HTML-Document eingebunden werden. Das sieht dann so aus:
```
<!DOCTYPE html>
<html>
<head>
    <title>Document-Title</title>
</head>
<body>
    <h1>Headline 1</h1>
    <script>
        alert('Hallo, JavaScript-Welt!');
    </script>
</body>
</html>
```

Das Gerüst für eine HTML-Seite mit JavaScript findet ihr hier: [example1/index.html](example1/index.html)

Innerhalb der `<script>`-Tags könnt ihr dann Euren JavaScript-Code einfügen.

Ihr habt im ersten Teil des Bootcamps [VS.Code](https://code.visualstudio.com/) auf euren Rechnern installiert. VS.Code ist ein schönes Beispiel, wie umfangreich eine JavaScript-Applikation werden kann. Es ist selbst in JavaScript programmiert. Einer der Vorteile von VS.Code ist die einfache Erweiterbarkeit. Es gibt hundert, teils recht gute, Extensions. 

Neue Extensions könnt ihr einfach über das Extension-Icon ![Extension-Icon](../images/vs.code-extension-icon.PNG "Extension Icon") hinzufügen. 

Bitte fügt bei euch folgende Extensions hinzu:

- **Live Server** - Das ist ein kleiner Webserver, der eure HTML-Seiten immer neu ausliefert, wenn ihr sie in VS.Code ändert. Ihr braucht also nicht mehr den Reload-Button im Browser benutzen. Einfach die geänderte HTML-Datei in VS.Code speichern, und schon stellt der _Live Server_ sie neu dar. 
Ihr könnt nach der Installation der Extension den Live Server für jede HTML-Seite starten, indem ihr in VS.Code einen Rechtsklick auf die HTML-Datei ausführt und *Open with Live Server* auswählt.

## Getrente JavaScript-Datei

Ihr könnt bereits euren JavaScript-Code direkt im HTML ausführen. 
```javascript
<body>
    <script>
        <alert('Hallo,JavaScript-Welt!');
    </script>
</body>
```
Bei größeren Projekten wollt ihr aber euren Code von der HTML-Seite trennen. Um das zu erreichen, könnt ihr im `<script>`-Tag einfach eine Datei mit eurem JavaScript-Code angeben. Ein Beispiel findet ihr hier: [example2/index.html](example2/index.html).


Das sieht dann so aus, wenn ihr das Skript _index.js_ laden wollt:
```javascript
<body>
   <script src="index.js"></script>
</body>
```
Falls ihr auf älteren Code stoßt, kann es passieren, dass im `<script>`-Tag noch ein `type='text/javascript` steht. Das ist überholt und heute nicht mehr erforderlich, da JavaScript mittlerweile der Default-Skripttyp ist.
Sowas braucht ihr also nicht mehr:
`<script type='text/javascript' src="index.js"></script>` 

## Variablen
Variablen sind ein "benamter" Speicher für Daten. Wir benutzen sie, um uns Sachen zu merken. Über ihren Namen können wir die Inhalte dann wiederfinden.

So legen wir eine Variable an:
```javascript 
let kiste;
kiste = 'Stifte';

alert(kiste);
 ```

Wir können auch mehrere Variablen in einer Zeile anlegen:
```
let kiste1 = 'Stifte', kiste2 = 'Scheren';
 ```

Das ist das Gleiche wie:

```javascript
let kiste1 = 'Stifte';
let kiste2 = 'Scheren';
 ```

Früher wurden in JavaScript Variablen oft mit `var` statt `let`definiert:
```javascript
var kiste = 'stifte';
 ```

Wir benutzen das nicht mehr, ihr solltet es aber wissen, um fremden Code zu verstehen.

Ihr könnt Variablen kopieren:
```javascript
let kiste = 'Stifte';
let neueKiste;
neueKiste = kiste;

// oder: let neueKiste = kiste1;

alert(kiste);
alert(neueKiste);
 ```

Oder neue Sachen zuordnen:
```javascript
let kiste = 'Stifte';
kiste = 'Kekse'; // Nun sind Kekse in der Kiste;-)
 ```

Variablennamen dürfen nur aus Buchstaben, Zahlen und den Sonderzeichen '$' und '_' bestehen. An erster Stelle darf keine Zahl stehen.

```javascript
let _guterVariablenname123;
let 1dasGehtNicht! //Falsch!!1!
 ```
Wir benutzen camelCase. Wie beim Kamel:-) Jedes neue Wort ist ein Höcker...

Hier kommt **CONST**


