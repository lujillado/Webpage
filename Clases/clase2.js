//funcion expresada

function saludar(nombre) {
  return "Hola " + nombre;
}
console.log(saludar("Esteban"));

/* Javascript es un lenguaje compilado, es decir primero lee todo el codigo y luego lo ejecuta
Python es interactivo, a medida que vas escribiendo el codigo lo va ejecutando */

// Funcion declarada

let despedir = function (nombre) {
  return "Adios " + nombre;
};
console.log(despedir("Esteban"));

/* Javascipt reserva la variable pero no corre el codigo antes de la variable 
No podria llamar a la funcion antes de declararla */

// Back tick

function saludaconSuma(nombre) {
  return `Hola ${nombre}, la suma es ${1 + 1}`;
}

console.log(saludaconSuma("Esteban"));

// Funcion flecha

let saludarFlecha = (nombre) => "hola " + nombre;
console.log(saludarFlecha("Esteban"));

//Estructura if
let a = 1;
let b = 2;
if (a < b) {
  console.log("a es menor que b");
} else if (a === b) {
  console.log("a es igual a b");
} else {
  console.log("a es mayor que b");
}

//operador ternario
console.log(a > b ? "a es mayor que b" : "a no es mayor que b");

// En Javascript el for tiene una mejor perfomance que el while

// For (variable; condicion, variacion)

for (let i = 0; i < 10; i++) {
  // muestra los numeros del 0 al 9
  console.log("El valor de i es", i);
}

/* En este caso la variable i solo vive en el for, por lo que puedo volver a usar la i en otro for */

let nombre = "Esteban";

for (let i = 0; i < nombre.length; i++) {
  console.log(nombre[i]); // muestra cada letra del nombre
}

const CARRITO = [
  { id: 1, nombre: "Remera blanca lisa", precio: 5 },
  { id: 2, nombre: "Remera roja lisa", precio: 5 },
  { id: 3, nombre: "Remera negra lisa", precio: 5 },
];

for (let i = 0; i < CARRITO.length; i++) {
  if (CARRITO[i].id < 2) {
    CARRITO[i].precio = CARRITO[i].precio * 1.2; // aumento un 20% el precio de cada producto
  }
}
console.log(CARRITO);

let total = 0;
for (let i = 0; i < CARRITO.length; i++) {
  total += CARRITO[i].precio // sumo el precio de cada producto
}
console.log("El total es", total);

// Metodos

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10


/* Map recorre un array y le aplica una funcion a cada QUE VA A HACER ALMACENADO EN OTRO ARRAY 
Es basicamente lo que yo deberia hacer para agregarle un 20% mas a todos mis productos*/
const array1 = [1, 4, 9, 16];

// Pass a function to map
const mapped = array.map((x) => x * 2);

console.log(mapped);
// Expected output: Array [2, 8, 18, 32]



//Splice

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb"); // si pongo el 0 en el segundo parametro no borra nada
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May"); // si pongo el 1 en el segundo parametro borra el elemento en el casillero
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]


// Filter

const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]


const numbers = [1000000, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result1 = numbers.filter((number) => number.length > 3);

console.log(result1);
// Expected output: Array ["exuberant", "destruction", "present"]