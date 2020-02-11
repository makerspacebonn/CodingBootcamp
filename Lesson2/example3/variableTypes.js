// Number
let n = 123;
n = 12.345;

// String
let str = "Hallo";
let str2 = 'Einfache Anführungszeichen sind auch ok';
let phrase = `Man kann auch andere Strings einfügen... ${str}`;

//Boolean (wahr/falsch)
let einhornIstDa = true;
let einhornIstNuechtern = false;

// null (Wert)
let alter = null; //nichts, leer, unbekannt.

// undefined
let x;
alert(x); //Gibt undefined aus. Der Wert ist nicht zugewiesen.

// Wir benutzen null um einer Variablen einen "leeren" oder "unbekannten" Wert zuzuweisen.
// Wir prüfen auf "undefined" um zu sehen, ob einer Variable ein Wert zugewiesen wurde.

// Object
// Objects sind komplexe Datentypen, die typischerweise aus mehreren anderen Zusammengesetz sind.

typeof undefined // "undefined"

typeof 0 // "number"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)