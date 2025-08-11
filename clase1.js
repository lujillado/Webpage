/* 
let (para crear cualquier tipo de variable)
*/
let nombre = "Juan";
let edad = 1;

console.log(nombre,edad); 

let = true; // booleano

/* 
option shift A : para comentar varias lineas de codigo en MAC
*/

EDAD = 32;
EDAD = 32 + 1;
console.log("la edad es",EDAD);

const PI = 3.1416; // constante, no se puede cambiar su valor
/* PI = PI + 1; esto me daria un error porque si dice const no puede cambiar su variable */
console.log("Constante pi es",PI);

const array = [1, 2, 3, 4, 5]; // array  que no puedo modificar
console.log(array);

let array1 = [1, 2, 3, 4, 5]; 
array1.push(6); // puedo modificar el array
console.log(array1);

let perro_Violeta = {
    nombre: "Pipo",
    edad: 3,
    cumpliranios: function() {
        this.edad +1;
    }
}
console.log(perro_Violeta.nombre);

/* La estructura de objeto es lo que sos vos en tus redes sociales */

let perro_Juli = {
    nombre: "Zuma",
    edad: 3,
    cumpliranios: function() {
        this.edad +1;
    }
}
const perros = [perro_Violeta, perro_Juli]; // array de objetos
console.log(perros[1].nombre); // accedo al nombre del segundo objeto en el array

/* los arrays de objetos es lo que se usa en un carrito de compras por ejemplos */

console.log("esteban" && "juan"); // operador AND, devuelve el segundo valor si el primero es verdadero
console.log("esteban" || "juan"); // operador OR, devuelve el primer valor verdadero
console.log("undefined" && "juan"); // muestra juan porque "undefined" es un string entonces es true
console.log(undefined && "juan"); //muestra undefined porque es false

/* Para saber que valores son verdaderos buscas el glosario de Truthy */
/* Para saber que valores son falsos buscas el glosario de Falsy
ej: Null, undefined */

console.log("2" == 2); //true porque el valor es el mismo (y == es un igual debil)
console.log("2" === 2); //false porque el valor es el mismo pero el tipo de variable distinta (y == es un igual fuerte)
