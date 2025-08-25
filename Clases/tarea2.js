/* 1. Ejercicio 1: Función Declarada
https://www.w3schools.com/js/js_functions.asp
Escribe una función que tome tres números como argumentos y retorne el mayor de ellos. Llama a la función con diferentes valores e imprime el resultado.*/

let NumeroMayor = function(num1, num2, num3) {
if (num1 >= num2 && num1 >= num3) {
    return num1;
} else if (num2 >= num1 && num2 >= num3) {
    return num2;
    } else {
    return num3;
} 
}
console.log("El numero mayor de la terna es",NumeroMayor(100, 20, 3000));

/* 2. Ejercicio 2: Función Expresada
https://www.w3schools.com/js/js_functions.asp
Crea una función expresada que reciba un array de strings y retorne un string que concatena todos los elementos del array separados por espacios. */

AMIGOS = [ "Esteban", "Juan", "Pedro", "Maria", "Lucia"];

function concatenarArray(array) {
    return array.join(", ");
}
console.log("Los amigos son:", concatenarArray(AMIGOS));

function concatenar(array) {
    resultado = "";
    for (let i = 0; i < array.length; i++) {
        resultado += " ," + array[i];
    }
    return resultado;
}
console.log("Los amigos son:", concatenar(AMIGOS));

/* 3. Ejercicio 3: Función Flecha
https://www.w3schools.com/js/js_arrow_function.asp
Convierte la función del ejercicio anterior a una función de flecha. Además, agrega una validación para que, si el array está vacío, retorna un mensaje de advertencia. */

let concatenarFlecha = (array) => "Los amigos son: " + array.join (", ");
console.log(concatenarFlecha(AMIGOS));

/* 4. Ejercicio 4: Estructura If-Else
https://www.w3schools.com/js/js_if_else.asp
Escribe una función que tome una temperatura en grados Celsius como argumento y devuelva un mensaje que indique si hace frío (menor a 15 grados), templado (entre 15 y 25 grados) o calor (mayor a 25 grados). */

function temperaturaCelsius(temperatura) {
    if (temperatura < 15) {
        return "Hace frío";
    } else if (temperatura >= 15 && temperatura <= 25) {
        return "Hace templado";
    } else {
        return "Hace calor";
    }
}
console.log(temperaturaCelsius(10)); // Hace frío

/* 5. Ejercicio 5: Operador Ternario
https://www.w3schools.com/js/js_comparisons.asp
Reescribe una función que tome una hora (formato 24 horas) y devuelva "Buenos días" si es antes de las 12, "Buenas tardes" si es entre las 12 y 18, o "Buenas noches" si es después de las 18, utilizando operadores ternarios. */
/* 6. Ejercicio 6: Operadores And y Or
https://www.w3schools.com/js/js_comparisons.asp
Escribe una función que reciba cuatro argumentos booleanos y retorne true si al menos uno de los dos primeros es verdadero y al menos uno de los dos últimos es falso. */
/* 7. Ejercicio 7: Función que Calcula el Factorial
https://www.w3schools.com/js/js_functions.asp
Escribe una función que tome un número como argumento y retorne su factorial. Utiliza una estructura if para manejar el caso base. */
/* 8. Ejercicio 8: Función con Parámetros por Defecto
https://www.w3schools.com/js/js_function_parameters.asp
Crea una función que salude a una persona. Si no se proporciona el nombre, debe saludar con "Hola, invitado". */
/* 9. Ejercicio 9: Función que Verifica Números Pares
https://www.w3schools.com/js/js_comparisons.asp
Escribe una función que tome un número y retorne true si es par o false si es impar. Utiliza el operador módulo (%) y un operador ternario. */
/* 10. Ejercicio 10: Uso de switch
https://www.w3schools.com/js/js_switch.asp
Escribe una función que reciba un día de la semana (en número) y retorne el nombre del día. Usa una estructura switch. */
/* 11. Ejercicio 11: Función Recursiva
https://www.w3schools.com/js/js_functions.asp
Crea una función recursiva que calcule la suma de los números de 1 hasta n. */
/* 12. Ejercicio 12: Validación con Operadores Lógicos
https://www.w3schools.com/js/js_comparisons.asp
Escribe una función que verifique si una contraseña cumple con ciertos criterios: al menos 8 caracteres, contiene un número y una letra mayúscula. Utiliza operadores lógicos para combinar las condiciones.
 */ 