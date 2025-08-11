let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10; //Variable que indica el rango limite de los numeros secretos generados de la lista listaNumerosSorteados
let nuevoJuegoMaximo = 0;

//Creamos una función para asignar texto a un elemento o etiqueta de html para reutilizar código,
//evitar redundancias y reducir la cantidad de líneas de código
function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento); //Esta línea de código representa una especie de conexión entre Java Script y HTML
    elementoHTML.innerHTML = texto;
    return;//Una buena practica de progra es siempre terminar con la sentencia "retunr;" aunque la función no retorne ninguna variable.
}

function verificarIntento(){ //Estas líneas de código representan la inicialización y creación de una función que se agregara en el archivo HTML
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        //Bloque de codigo si el usuario acierta el número.
        asignarTextoElemento('p', `Acertaste el número secreto en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //Bloque de codigo si el usuario no acierta el número.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    //Esta es otra manera de implementar la línea de codigo 13, en vez de utilizar el getElementId 
    //utilizamos el querrySelector pero entre los paraentesis anteponemos el signo # para decirle al programa que 
    //lo queremos por un Id
    /*Esta es una forma de implementar la función de limpiar caja.
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
    */

    //Este es otra formas más corta y optimizada.
    document.querySelector('#valorUsuario').value = '';
    return;
}

function generarNumeroSecreto() {
    /* 
    Esta es la manera basica de generar el contenido de la función para crear el numero secreto aleatorio
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    return numeroSecreto;
    */

    //Esta es otra manera más sencilla y simplificada
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los núneros del 1 al 10
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números del 1 al 10');
    }else {
        //Si el númerro generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            //Si el número generado se encuentra en la lista, ocuparemos recursividad de funciones, para que esta función se llame a si misma
            //y genere un numevo número que no este agregado a la lista, es una especie de bucle que finaliza hasta que su condición sea false
            return generarNumeroSecreto();
        } else{
            //Si el número generado no se encuentra adicionado en la lista, este se guardara en la lista y retornara ese número generado
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Ingresa un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    nuevoJuegoMaximo ++;

    //Condición que limita al jugador reiniciar el juego solo 5 veces.
    if (nuevoJuegoMaximo == 6) {
        asignarTextoElemento('p', `Llegaste al limite de jugadas, presiona la tecla 'F5' para seguir jugando`);

        document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    }else {

        //Limpiar la caja
        limpiarCaja();

        //Volver a colocar las condiciones iniciales del juego
        condicionesIniciales();    

        //Deshabilitar el botón de nuevo juego
        document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    }
}

condicionesIniciales();

//Desafio 2

/*
Crear una función que muestre "¡Hola, mundo!" en la consola.

function saludo (){
    console.log('¡Hola, mundo!');
    return;
}

saludo();
*/

/*
Crear una función que reciba un nombre como parámetro y muestre
"¡Hola, [nombre]!" en la consola.

function saludoPersonalizado (nombre){
    console.log('¡Hola, ' + nombre + '!');
    return;
}

saludoPersonalizado('Angel');
*/

/*
Crear una función que reciba un número como parámetro y devuelva
el doble de ese número.

function numeroDoble (numero){
    return numero + numero;
}

alert('El doble de 10 es: ' + numeroDoble(10));
*/

/*
Crear una función que reciba tres números como parámetros y 
devuelva su promedio.

function promedio (numero1, numero2, numero3){
    let suma = numero1 + numero2 + numero3;
    return suma / 3;
}

alert('El promedio de 8, 6, 10 es: ' + promedio(8, 6, 10));
*/

/*
Crear una función que reciba dos números como parámetros 
y devuelva el mayor de ellos.

function numeroMayor (numero1, numero2){
    return numero1 > numero2 ? numero1 : numero2;
}

alert('Entre los números 7 y 10, el mayor de ellos es: ' + numeroMayor(7, 10));
*/

/*
Crear una función que reciba un número como parámetro
y devuelva el resultado de multiplicar ese número por sí mismo.

function multiplicacion (numero){
    return numero * numero;
}

alert('El prroducto de multiplicar 4 x 4 es: ' + multiplicacion(4));
*/

//FIN Desafio 2

//Desafio 3

/*
Crea una función que calcule el índice de masa corporal (IMC) de una 
persona a partir de su altura en metros y peso en kilogramos, que se 
recibirán como parámetros.

function imc(altura, peso) {
    let IMC = peso / (altura * altura);
    let resultado = IMC.toFixed(2);
    return resultado;
}

alert(`El inidice de masa corporal de una persona que mide 1.73 mts y pesa 66.67 kg es de ${imc(1.73, 66.67)}`);
*/

/*
Crea una función que calcule el valor del factorial de un número 
pasado como parámetro.

// Función iterativa para calcular el factorial
function factorialIterativa(numero) {
    let resultado = 1;

    for (let i = 2; i <= numero; i++) {
    resultado *= i;
    }

    return resultado;
}

//Función recursiva para calcular el factorial
function factorialRecursivo(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * factorialRecursivo(numero - 1);
  }
}

alert(`El factorial de 1 es ${factorialIterativa(1)}`);
*/

/*
Crea una función que convierta un valor en dólares, pasado como parámetro,
y devuelva el valor equivalente en reales(moneda brasileña,si deseas 
puedes hacerlo con el valor del dólar en tu país). Para esto, considera 
la cotización del dólar igual a R$4,80.

function conversionReales(dolares) {
    let conversion = dolares * 4.80;
    let resultado = conversion.toFixed(2);
    return resultado;
}
 alert(`La conversionde $100.00 dolares a reales es de R${conversionReales(100)}`);
*/

/*
Crea una función que muestre en pantalla el área y el perímetro de una sala 
rectangular, utilizando la altura y la anchura que se proporcionarán como 
parámetros.

function areaSalaRectangular(altura, anchura) {
    let area = altura * anchura;

    return area;
}

function PerimetroSalaRectangular(altura, anchura) {
    let perimetro = 2 * (altura + anchura);

    return perimetro;
}

alert(`Para una sala rectangular que tiene 4 mts de altura y 7 mts de anchura su area es de ${areaSalaRectangular(4, 7)} y su preimetro es de ${PerimetroSalaRectangular(4, 7)}`);
*/

/*
Crea una función que muestre en pantalla el área y el perímetro de una sala 
circular, utilizando su radio que se proporcionará como parámetro. 
Considera Pi = 3,14.

function areaSalaCircular(radio) {
    let area = 3.14 * (radio * radio);

    return area;
}

function PerimetroSalaCircular(radio) {
    let perimetro = 2 * 3.14 * radio;

    return perimetro;
}

alert(`Para una sala circular que tiene un radio de 43.50 su area es de ${areaSalaCircular(43.50)} y su preimetro es de ${PerimetroSalaCircular(43.50)}`);
*/

/*
Crea una función que muestre en pantalla la tabla de multiplicar de un 
número dado como parámetro.

function tablaDeMultiplicar(numero) {
    for (let i = 0; i <= 10; i++) {
        let resultado = numero * i;
        alert(`${numero} x ${i} = ${resultado}`);
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

tablaDeMultiplicar(9);
*/

//FIN Desafio 3

//Desafio 4

/*
Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];
*/

/*
Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion
con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
*/

/*
Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 
'Ruby' y 'GoLang'.

lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');
*/

/*
Crea una función que muestre en la consola todos los elementos de la lista 
"lenguagesDeProgramacion.

function mostrarLista(lenguagesDeProgramacion) {
    console.log(lenguajesDeProgramacion);
    return;
}

mostrarLista(lenguajesDeProgramacion);
*/

/*
Crea una función que muestre en la consola todos los elementos de la lista 
"lenguagesDeProgramacion en orden inverso.

function mostrarListaInversa() {
    console.log(lenguajesDeProgramacion.reverse());
    return;
}

mostrarListaInversa();
*/

/*
Crea una función que calcule el promedio de los elementos en una lista de 
números.

let listaDeNumeros = [4, 7, 3, 8, 9, 5, 7];

function promedioListaDeNumeros(lista) {
    let suma = 0;

    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];    
    }
    return suma / lista.length;
}

console.log(promedioListaDeNumeros(listaDeNumeros));
*/

/*
Crea una función que muestre en la consola el número más grande y el número 
más pequeño en una lista.

let numeros = [123, 16, 692, 21];

function masGrandeMasPequenio(lista) {
    let masGrande = 0;
    let masPequenio = 0;

    for (let j = 0; j < lista.length; j++) {
        masPequenio += lista[j];
    }

    for (let i = 0; i < lista.length; i++) {

        if (lista[i] > masGrande) {
            masGrande = lista[i];
        }else if (lista[i] < masPequenio) {
            masPequenio = lista[i];
        }        
    }

    console.log(`El contenido de la lista es:  ${lista}`);
    console.log(`El número más grande de la lista es: ${masGrande}`);
    console.log(`El número más pequeño de la lista es: ${masPequenio}`);
    return;
}

masGrandeMasPequenio(numeros);
*/

/*
Crea una función que devuelva la suma de todos los elementos en una lista.

let masNumeros = [34, 2, 22, 10, 60];

function sumaDeLaLista(lista) {
    let suma = 0;

    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }

    return suma;
}

console.log(`El contenido de la lista es:  ${masNumeros}`);
console.log(`La suma de todos los números de la anterior lista es: ${sumaDeLaLista(masNumeros)}`);
*/

/*
Crea una función que devuelva la posición en la lista donde se encuentra 
un elemento pasado como parámetro, o -1 si no existe en la lista.

let numeritos = [20, 5, 15, 9, 99];
let elemento = 5;
function posicionDelElemento(valor, lista) {
    let indiceElemento = lista.indexOf(valor);
    if (indiceElemento > -1) {
        console.log(`El indice del elemeto ${valor} es: ${indiceElemento}`);
    } else {
        console.log(`El elemento ${valor} que ingreso no se encuentra en la lista, por ende su indice es: ${indiceElemento}`);
    }
    return;
}

posicionDelElemento(9, numeritos);
*/

/*
Crea una función que reciba dos listas de números del mismo tamaño y 
devuelva una nueva lista con la suma de los elementos uno a uno.

let listaUno = [23, 45, 3, 7, 10];
let listaDos = [65, 31, 10, 5, 11];

function nuevaLista(lista1, lista2) {
    let nuevaLista = [];
    let suma = 0;

    for (let i = 0; i < lista1.length; i++) {
        suma = lista1[i] + lista2[i];        
        nuevaLista.push(suma);
    }

    return nuevaLista;
}

console.log(`El contenido de la lista uno es: ${listaUno}`);
console.log(`El contenido de la lista dos es: ${listaDos}`);
console.log(`La nueva lista que dio de resultado al sumar los elementos de las dos listas uno a uno es: ${nuevaLista(listaUno, listaDos)}`);
*/

/*
Crea una función que reciba una lista de números y devuelva una nueva 
lista con el cuadrado de cada número.

let listaNueva = [20, 5, 12];

function cuadradoDeLaLista(lista) {
    let listaNueva = [];

    for (let i = 0; i < lista.length; i++) {
        let cuadradoDelElemento = lista[i] * lista[i];

        listaNueva.push(cuadradoDelElemento);
    }

    return listaNueva;
}

console.log(`El contenido de la lista es: ${listaNueva}`);
console.log(`El cuadrado de cada uno de los elementos de la lista anterior es: ${cuadradoDeLaLista(listaNueva)}`);
*/

//FIN Desafio 4