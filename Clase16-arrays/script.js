


// let variableA = 0;
// for (i = 0; i<5; i++){
//     variableA = variableA + 1;
// }


// console.log("El Resultado es: " + variableA); 

// Formas de declarar los Arrays
// let primeraForma = ['lucas', 'lucas', 42, true];
// console.log(primeraForma[3]);

// let segundaForma = new Array('uno', 'dos', 3);
// console.log(segundaForma);

// let arraNuevo = new Array();
// arraNuevo[0] = 'juan';
// arraNuevo[1] = 'jose';
// arraNuevo[2] = 'pedro 42mate trainee';
// arraNuevo[3] =  'santi 144hz';
// console.log(arraNuevo)

//Pedir tamanio del array
// let miArray = [3,5,6,9,11,13,15,17];
// miArray[4]=5;

// console.log(miArray.length);

//formas de ordenar
// let listaNombres = ['Eva', 'Nati', 'Debora'];
// console.log(listaNombres);
// console.log(listaNombres.sort())
// console.log('El primer elemento es: ' + listaNombres[0] );
// console.log('El ultimo elemnto es: ' + listaNombres[listaNombres.length-1]);


// insertar elementos al inico y al final
//let listaNombres = ['Eva', 'Nati', 'Debora'];
// console.log(listaNombres);
// listaNombres.push('Rocio');
// listaNombres.push('Ricardo');
// listaNombres.unshift('John');
// console.log(listaNombres);


/*Transformando a String*/
//console.log(listaNombres.join('\n'));

// /*Eliminando Elementos*/
// let listaNombres = ['Eva', 'Juana', 'Leo', 'Pedro', 'Santi 144hz'];
// console.log(listaNombres);
// listaNombres.shift();  /*elimina el primero*/
// console.log(listaNombres);
// listaNombres.pop(); /* elimina ultimo */
// console.log(listaNombres);
// listaNombres.splice(1,2); /*elimina elemento especifico*/
// console.log(listaNombres);


// /* Concatenar arrayas */
// let unArray = [1, 2, 3];
// let otroArray = [4,5,6];
// console.log(unArray.concat(otroArray));
// let concatenado = [].concat(unArray,otroArray);
// console.log(concatenado);

// /* ordenamiento de arrays numericos */
// let miArray = [5,7,10,20,12,9,89];
// console.log(miArray.sort(function(a,b){ return a-b} )); /* funcion comparador*/

// /* Chequear validez de un e-mail */
// let email = "mimail@gmail.com";

// if(email.includes("@")){
//      console.log("mail valido")
// }else{
//      console.log("mail invalido")
// }


// let nombreUser = '       juan          ';

// console.log(nombreUser.trim())

// let cortarTexto = "Vamos a cortar este texto";
// console.log(cortarTexto.substring(0, 5));
// console.log(cortarTexto.substr(8,5));



/* FUCNCIONES FLECHAS */
// function sumar1(a,b){ /* funcion declarativa */
//     return a=b
// }
// sumar1(3,5);

// let sumar3 = function(a,b){ /*Funcion expresiva*/
//     return a+b;
// }

// let suma2 = (a,b)=>{return a+b};
// console.log(suma2(3,8));


// const arr = [1,2,3,4,5,6,7];

// arr.forEach(element =>{
//     console.log(element);
// })


// const pares = [2,4,6,8];
// const potencia = pares.map(num => [Math.pow(num,2),num]); /* mapea todos los elementos del array o lo que le mandes */
// console.log(potencia)

// let lista = ["home","about","proyectos","contacto"];
// let nav = lista.map((item)=> ${item});
// console.log(nav);
// document.write(nav.join(","));

// const buscar = [30,35,45,70,91,120];

// const x = buscar.find(elemento => elemento > 90) /* finde devuelve el primer valor que encuentra del parametro que le pasa, deja de iterar alli */
// console.log(x);


// let peliculas = ['el padrino', 'pulp fiction', 'bad boys', 'star wars'];

// let pulpFiction = peliculas.find(peli =>{
//     return peli.includes('pulp');
// })

// console.log("La peli encontrada es: " + pulpFiction);


// let numbers = [123,234,345,456,567];

// let big = numbers.filter(function(item){  /* filtra los elementos de acuerdo a la condicion que le pasas */
//     return item > 300;
// })

// console.log(big);
// console.log(numbers.filter(num => num >300))


// let numeros = [10,2,3,4,5,6,78];

// let pares = numeros.filter(elemento => elemento%2==0);
// console.log(pares)

// let frase = 'esta es una frase muy muuuuy larga';
// console.log(frase.split(' '))

// const frasecita = prompt('Ingresa una frase para devolver las vocales')
// const vocales = 'aeiou';


// let vocalesDeLaFrase = frasecita.split("").filter(letra=>vocales.includes(letra));
// console.log(frasecita);
// console.log(vocalesDeLaFrase);




































