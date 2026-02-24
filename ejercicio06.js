// Ejercicio 6: Conversión de Grados Celsius a Fahrenheit
// Declara una función llamada "celsiusAFahrenheit" que acepte un parámetro "celsius" y retorne la conversión a Fahrenheit

//escribe tu función aquí. Recuerda que el nombre de la función debe ser exactamente "celsiusAFahrenheit"
function celsiusAFahrenheit(celsius) {
    return 9/5 * celsius + 32;
}

// Exporta la función para que pueda ser utilizada en las pruebas
module.exports = {
    celsiusAFahrenheit
};

console.log(celsiusAFahrenheit(32));