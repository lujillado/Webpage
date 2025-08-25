/*1. Ejercicio 1: Declaración de Variables
https://www.w3schools.com/js/js_variables.asp
Declara tres variables: 
una para almacenar tu ciudad
otra para almacenar tu país
otra para almacenar tu fecha de nacimiento.
Imprime los valores en la consola y después intenta cambiar los valores y observa los resultados con let y const */

let ciudad = "Zarate";
let pais = "Argentina";
const fechaNacimiento = "30/10/2002";

console.log("Ciudad:", ciudad);
console.log("Pais:", pais);
console.log("Fecha de Nacimiento:", fechaNacimiento);

ciudad = "Buenos Aires";
console.log("Ciudad actualizada:", ciudad);

/* 2. Ejercicio 2: Operaciones Matemáticas
https://www.w3schools.com/js/js_arithmetic.asp
Declara tres variables numéricas. 
Calcula el promedio de las tres y encuentra el residuo de la división de la suma total entre 2. 
Imprime los resultados. */

let var1 = 15;
let var2 = 25;
let var3 = 35;

let promedio = [var1, var2, var3].reduce((suma, b) => suma + b, 0) / 3; // el b seria el contador? 
console.log("Promedio:", promedio);

let numeros = [5, 10, 15];

let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i]; // es lo mismo que suma += numeros[i];
    prom = suma / i;
}
console.log("Suma total:", suma);
console.log("Promedio:", prom);

/* 3. Ejercicio 3: Tipos de Datos
https://www.w3schools.com/js/js_datatypes.asp
Declara una variable para almacenar un objeto que represente 
un coche con propiedades como marca, modelo y año. Imprime el tipo de cada propiedad con typeof. */

let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020
};
console.log("Tipo de marca:", typeof(auto.marca)); //typeof es para saber el tipo de variable
console.log("Tipo de modelo:", typeof auto.modelo); 
console.log("Tipo de modelo:", typeof auto.año);

console.log("Tipo de modelo:", auto.modelo);

/* 
4. Ejercicio 4: Arrays Básicos
https://www.w3schools.com/js/js_arrays.asp
Crea un array con los nombres de 5 ciudades que te gustaría visitar. 
Reemplaza el tercer elemento por otra ciudad y luego imprime el array actualizado. */

let ciudades = ["Sidney", "Tokio", "Lisboa", "Porto", "Melbourne"];
console.log("Ciudad:", ciudades[2]);

ciudades[2] = "Barcelona"; // reemplaza el tercer elemento
console.log("Cambio de ciudad:", ciudades[2]);

ciudades.push("Madrid"); // agrega una ciudad al final del array
console.log("Array completo:", ciudades);

/* 5. Ejercicio 5: Array de Objetos
https://www.w3schools.com/js/js_objects.asp
Crea un array de 3 objetos que representen películas, cada una con título, director y año de lanzamiento. 
Imprime el director de la última película.
 */

let pelicula1 = {
    titulo: "Inception",
    director: "Christopher Nolan",
    año: 2010
}
let pelicula2 = {
    titulo: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    año: 1999
}
let pelicula3 = {
    titulo: "Interstellar",
    director: "Christopher Nolan",
    año: 2014
}
let peliculas = [pelicula1, pelicula2, pelicula3];
console.log("Director de la última película:", peliculas[peliculas.length - 1].director);

/* 6. Ejercicio 6: Operadores Lógicos
https://www.w3schools.com/js/js_comparisons.asp
Declara tres variables booleanas y usa operadores lógicos para verificar si al menos dos son verdaderas.
Imprime true o false en la consola dependiendo del resultado. */

let boolean1 = true;
let boolean2 = false;
let boolean3 = true;

let resultado = (boolean1 && boolean2) || (boolean1 && boolean3) || (boolean2 && boolean3);
console.log("Al menos dos son verdaderas:", resultado);

/* 7. Ejercicio 7: Comparaciones
https://www.w3schools.com/js/js_comparisons.asp
Declara tres variables numéricas. Compara si el primer número es mayor que el segundo y menor que el tercero.
 Luego, verifica si el segundo número es distinto al tercero. Imprime los resultados de las comparaciones. */

let num1 = 1;
let num2 = 2;
let num3 = 3;

let MayorMenor = num1 > num2 && num1 < num3;
console.log("El primer número es mayor que el segundo y menor que el tercero:", MayorMenor);

let num4 = 4;
let num5 = 2;
let num6 = 6;
let MayorMenor1 = num4 > num5 && num4 < num6;
console.log("El cuarto número es mayor que el quinto y menor que el sexto:", MayorMenor1);

/* 8. Ejercicio 8: Concatenación de Strings
https://www.w3schools.com/js/js_string_methods.asp
Declara dos variables que almacenen strings (por ejemplo, tu nombre y tu apellido). 
Luego, crea una tercera variable que concatene las dos primeras y muestra el resultado en la consola. */

let nombre = "Lujan";
let apellido = "Llado";
let nombreCompleto = nombre+apellido;
console.log("Nombre completo:", nombreCompleto);
let mellamo = nombre+" "+ apellido;
console.log("Me llamo:", mellamo);

/* 9. Ejercicio 9: Incremento y Decremento
https://www.w3schools.com/js/js_operators.asp
Declara una variable numérica y utiliza los operadores de incremento (++) y decremento (--) para modificar su valor.
Imprime el valor de la variable después de cada operación. */

let numero = 10;
console.log("Número original:", numero);
numero++; // Incremento
console.log("Número después del incremento:", numero);
numero--; // Decremento
console.log("Número después del decremento:", numero);

/* 10. Ejercicio 10: Propiedades de Objetos
https://www.w3schools.com/js/js_objects.asp
Crea un objeto que represente un estudiante con propiedades como nombre, edad y carrera. 
Accede e imprime cada propiedad del objeto. */

let estudiante = {
    nombre: "Lujan",
    edad: 22,
    carrera: "Bioingeniería"
};
console.log("Nombre del estudiante:", estudiante.nombre);
console.log("Edad del estudiante:", estudiante.edad);
console.log("Carrera del estudiante:", estudiante.carrera);

/* 11. Ejercicio 11: Arrays Multidimensionales
https://www.w3schools.com/js/js_arrays.asp
Crea un array que contenga dos arrays internos, cada uno con 3 números.
Accede al segundo elemento del primer array interno. */
let arraymultidim = [
    [1, 2, 3],
    [4, 5, 6]
];
console.log("Segundo elemento del primer array interno:", arraymultidim[0][1]);

/* 12. Ejercicio 12: Operadores Relacionales
https://www.w3schools.com/js/js_comparisons.asp
Declara dos variables numéricas y utiliza los operadores >, <, >=, <=, ===, !== para comparar sus valores. 
Imprime el resultado de cada comparación. */
let a = 10;
let b = 20;
console.log("a > b:", a > b);   // false
console.log("a < b:", a < b);   // true
console.log("a >= b:", a >= b); // false
console.log("a <= b:", a <= b); // true
console.log("a === b:", a === b); // false
console.log("a !== b:", a !== b); // true

/* 13. Ejercicio 13: Uso de typeof con Variables No Definidas
https://www.w3schools.com/js/js_typeof.asp
Declara una variable sin asignarle un valor y otra variable con valor null. 
Utiliza typeof para imprimir el tipo de cada variable. */

let variableNoDefinida; // Variable sin valor asignado
let variableNull = null; // Variable con valor null
console.log("Tipo de variableNoDefinida:", typeof variableNoDefinida); // undefined
console.log("Tipo de variableNull:", typeof variableNull); // object (esto es un caso especial en JavaScript)

/* 14. Ejercicio 14: Conversión de Tipos
https://www.w3schools.com/js/js_type_conversion.asp
Declara una variable que almacene un número como string (por ejemplo, "123"). 
Convierte este string a un número usando parseInt o Number y demuestra que ahora puedes realizar operaciones matemáticas con él. */
let numeroString = "123"; // Número como string
console.log("Tipo de numeroString:", typeof(numeroString)); // string
console.log(numeroString * 3);

let numeroConvertido = parseInt(numeroString); // Convertir a número
console.log("Tipo de numeroConvertido:", typeof(numeroConvertido)); // number
console.log(numeroConvertido * 3); // 123
