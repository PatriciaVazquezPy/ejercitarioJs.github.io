//Variables y tipo de datos
//Crea una variable numero y asígnale un valor de tipo number.
let numero = 3;

//Crea una variable texto y asígnale un valor de tipo string.
let variable = "Hola";

//Crea una variable verdadero y asígnale un valor de tipo boolean que represente una afirmación verdadera.
let verdadero = true;
//Crea una variable falso y asígnale un valor de tipo boolean que represente una afirmación falsa.
let falso = false;
//Crea una variable nulo y asígnale un valor de tipo null
let nulo = null;
//Crea una variable indefinido y asígnale un valor de tipo undefined.
let indefinido = undefined;
//Crea una variable arreglo y asígnale un arreglo con varios valores de diferentes tipos de datos.
let arreglo = ["Hola", 2, String];
//Imprime en la consola el valor de la variable número y el tipo de dato que almacena.
console.log(typeof(2));
//Imprime en la consola el valor de la variable texto y el tipo de dato que almacena.
console.log(typeof("Hola"));
//Imprime en la consola el valor de la variable verdadero y el tipo de dato que almacena.
console.log(typeof(true));
//Imprime en la consola el valor de la variable falso y el tipo de dato que almacena.
console.log(typeof(false));
//Imprime en la consola el valor de la variable nulo y el tipo de dato que almacena.
console.log(typeof(null));
//Imprime en la consola el valor de la variable indefinido y el tipo de dato que almacena.
console.log(typeof(undefined));
//Imprime en la consola el valor de la variable arreglo y el tipo de dato que almacena.
console.log(typeof(["Hola"]));
 
//Decisiones en javascript (if,if else, switch)
//Escribe un programa que tome un número como entrada y muestre un mensaje en la consola indicando si es mayor, menor o igual a 10.
let num = prompt("Ingrese un numero: ");
if(num>10){
    console.log("Es mayor a 10");
}
else if (num<10){
    console.log("Es menor a 10");
}
else{
    console.log("Es igual a 10");
}
//Escribe un programa que solicite al usuario que ingrese un número y verifique si es par o impar.
let nume = prompt("Ingrese un numero: ");
if(nume %2 === 0 ){
    console.log("Es par");
}
else{
    console.log("Es impar");
}
//Escribe un programa que solicite al usuario que ingrese una letra y verifique si es una vocal o una consonante.
let letra = prompt("Ingrese una letra: ");
if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
    console.log("Es una vocal");
}
else{
    console.log("Es una consonante");
}
console.log(letra.toLowerCase);
//Escribe un programa que solicite al usuario que ingrese una edad y verifique si es mayor o menor de edad.
let edad =  prompt("Ingrese su edad: ");
if(edad >= 18){
    console.log("Es mayor de edad");
}
else{
    console.log("Es menor de edad: ");
}
//Escribe un programa que solicite al usuario que ingrese un número del 1 al 7 y muestre un mensaje en la consola indicando el día de la semana correspondiente.
let dias;
switch (dias){
    case '1':
        console.log("Lunes");
        break;
    case '2':
        console.log("Martes");
        break;
    case '3':
        console.log("Miercoles");
        break;
    case '4':
        console.log("Jueves");
        break;
    case '5':
        console.log("Viernes");
        break;
    case '6':
        console.log("Sabado");
        break;
    case '7':
        console.log("Viernes");
        break;
    default:
        console.log("Ingresar un numero del 1 al 7");
        break;
}


//Funciones
//Escribe una función que tome dos números como argumentos y devuelva su suma.
function sumar(sum1,sum2){
    let resultado;
    resultado = sum1 + sum2;
    return resultado;
}
let sum1 = 4;
let sum2 = 10;
let sumaT = sumar(sum1,sum2);
console.log(sumaT);
//Escribe una función que tome un número como argumento y devuelva true si es par o false si es impar.
function num(n){
    if(n %2 === 0){
    return("El numero es true");
}
    else{
        return("El numero es false");
    }
}
num(2);
//Escribe una función que tome un array de números como argumento y devuelva la suma de sus elementos.
function numerosArray(array){
    let sumaN=0;
    for(let i=o; i<array.length; i++){
        if(array[i] > 0){
        sumaN += array[i];
    }
    }
    return sumaN;
}
//Escribe una función que tome un array de strings como argumento y devuelva la longitud del string más largo.
function longitud(array){
    let sumaT = [];
    for(let i=0; i<array.length; i++){
      if(array[i].length > sumaT.length ){
       sumaT = array[i]; 
      }
    }
    return sumaT.length;
  }
//Escribe una función que tome un objeto como argumento y devuelva un array con los valores de todas sus propiedades.
function obtenerValores(objeto) {
  return Object.values(objeto);
}

//Vectores

//Escribe una función que tome un array de números como argumento y devuelva el número más grande.
function obtenerNumeroMasGrande(numeros) {
  return Math.max(numeros);
}
//Escribe una función que tome un array de números como argumento y devuelva un array con los números ordenados de menor a mayor.
function ordenarNumerosDeMenorAMayor(numeros) {
  return numeros.sort(function(a, b) {
    return a - b;
  });
}
//Escribe una función que tome dos arrays como argumentos y devuelva un array que contenga los elementos comunes entre ambos.
function obtenerElementosComunes(array1, array2) {
  return array1.filter(function(elemento) {
    return array2.includes(elemento);
  });
}
//Escribe una función que tome un array de strings como argumento y devuelva un nuevo array que contenga los strings convertidos a mayúsculas.
function convertirStringsAMayusculas(strings) {
  return strings.map(function(string) {
    return string.toUpperCase();
  });
}
//Escribe una función que tome un array de números como argumento y devuelva un nuevo array que contenga la suma acumulativa de sus elementos.
function sumarAcumulativamente(numeros) {
  let sumaAcumulativa = 0;
  return numeros.map(function(numero) {
    return sumaAcumulativa += numero;
  });
}


//Bucles
//Escribe un bucle for que imprima en la consola los números del 1 al 10.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//Escribe un bucle while que imprima en la consola los números del 1 al 5.
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
//Crea un vector con los números del 1 al 5. Escribe un bucle for que imprima en la consola cada uno de los elementos del vector.
const vector1 = [1, 2, 3, 4, 5];

for (let i = 0; i < vector1.length; i++) {
  console.log(vector1[i]);
}
//Crea una función que reciba un número n y devuelva la suma de todos los números del 1 al n. Utiliza un bucle for para calcular la suma y muestra el resultado en la consola.
function sumToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumToN(5)); 
//Crea una función que reciba un vector y devuelva la suma de todos sus elementos. Utiliza un bucle while para calcular la suma y muestra el resultado en la consola.
function sumOfArrayElements(array) {
  let sum = 0;
  let i = 0;
  while (i < array.length) {
    sum += array[i];
    i++;
  }
  return sum;
}

const vector2 = [1, 2, 3, 4, 5];
console.log(sumOfArrayElements(vector2)); 



//DOM y eventos
//Crea un archivo HTML con un botón y un div vacío. Usa JavaScript para agregar un mensaje al div cuando se hace clic en el botón.
const MIDIV = document.querySelector('#divVacio');
const BOTONMENSAJE = document.querySelector('#botonMensaje');

const MENSAJE = document.createElement('h1');

BOTONMENSAJE.addEventListener('click',()=>{
    MENSAJE.innerHTML = 'Hola mundo';
    MIDIV.appendChild(MENSAJE);
});
//Crea una función que cambie el color de fondo de un elemento HTML a rojo cuando el mouse se mueve sobre él. Agrega esta función como un listener de evento para el div del ejercicio anterior.
MIDIV.addEventListener('mouseenter',()=>{
    MENSAJE.style.color = 'blue';
});
//Crea una función que cambie el tamaño de fuente de un elemento HTML cuando se presiona una tecla en el teclado. Agrega esta función como un listener de evento para el div del ejercicio anterior.
document.addEventListener('keydown',()=>{
    console.log('se preseiona una tecla')
    MENSAJE.style = 'font-size: 100px';
})
//Crea una función que cambie el contenido de un elemento HTML cuando se hace doble clic sobre él. Agrega esta función como un listener de evento para el div del ejercicio anterior.
MIDIV.addEventListener('ndblclick',()=>{
    MENSAJE.innerHTML = "Doble click";
});
//Crea una función que cambie la imagen de fondo de un elemento HTML cuando se carga la página. Agrega esta función como un listener de evento para el body del documento.
function cambiarImagenFondo() {
    const BODY = document.body;
    BODY.style.backgroundImage = "url('imagen.jpg')";
};






