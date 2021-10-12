// /* EJERCICIO 1 */
// alert('HELLO WORLD - RIVER 2 BOCA 1');

// /* EJERCICIO 2 */
// document.write('HELLO WORLD');

// /* EJERCICIO 3 */
// alert(3+5);

// /* EJERCICIO 4 */
// let nameA = prompt('INGRESE EL NOMBRE DE USUARIO');
// alert('EL NOMBRE DE USUARIO ES: '+ nameA);

// /* EJERCICIO 5 */
// let num1 = parseInt(prompt('INGRESE UN NUMERO'));
// let num2 = parseInt(prompt('INGRESE OTRO NUMERO'));
// alert('EL RESULTADO ES: '+ (num1+num2));

// /* EJERCICIO 6 */
// let num1 = parseInt(prompt('INGRESE UN NUMERO'));
// let num2 = parseInt(prompt('INGRESE OTRO NUMERO'));

// if (num1 > num2){
//     alert('NUMERO MAYOR: '+num1)
// }
// else{
//     alert('NUMERO MAYOR: '+num2)
// };


/* EJERCICIO 7 */
// let num1 = parseInt(prompt('INGRESE EL PRIMER NUMERO'));
// let num2 = parseInt(prompt('INGRESE EL SEGUNDO NUMERO'));
// let num3 = parseInt(prompt('INGRESE EL TERCER NUMERO'));

// if(num1>num2 && num1>num3){
//     alert('EL PRIMER NUMERO ES EL MAYOR: '+num1);
// }
// else if(num2>num1 && num2>num3){
//     alert('EL SEGUNDO NUMERO ES EL MAYOR: '+num2);
// }
// else if(num3>num1 && num3>num2){
//     alert('EL TERCER NUMERO ES EL MAYOR: '+num3);
// }
// else{
//     alert('HAY MAS DE UN NUMERO IGUAL');
// }

/* EJERCICIO 8 */
// let num1 = parseInt(prompt('INGRESE UN NUMERO REY'));

// if((num1 % 2) === 0){
//     alert('EL NUMERO ES DIVISIBLE POR 2')
// }
// else{
//     alert('NO ES DIVISIBLE POR 2 ')
// }

/* EJERCICIO 9 */
// let frase1 = prompt('INGRESE UNA FRASE');
// let vocalEs = 0;

// for(let i=0; i <= (frase1.length);i++){
//     frase1 = frase1.toLowerCase()
//     if(frase1[i] === 'a'){
//         vocalEs ++;
//     }
// }

// alert("CANTIDAD DE A: "+ vocalEs);

/* EJERCICIO 10 */

// const frasecita = prompt('Ingresa una frase para devolver las vocales')
// const vocales = 'aeiouAEIOU';


// let vocalesDeLaFrase = frasecita.split("").filter(letra=>vocales.includes(letra));
// console.log(frasecita);
// console.log(vocalesDeLaFrase);




/* EJERCICIO 11 */

// let vocales = 'aeiouAEIOU'
// let fraseA = prompt('Ingrese una Frase');
// let vocalesDeLaFrase = fraseA.split("").filter(letra=>vocales.includes(letra));
// let cantVocales = vocalesDeLaFrase.length


// console.log(fraseA);
// console.log(vocalesDeLaFrase);
// console.log('La cantidad de vocales es: '+cantVocales);


/* EJERCICIO 12 */
// let vocales = 'aeiouAEIOU'
// let aes = 'aA';   let contA = 0;
// let ees = 'eE';   let contE = 0;  
// let ies = 'iI';   let contI = 0; 
// let oes = 'oO';   let contO = 0;
// let ues = 'uU';   let contU = 0; 

// let fraseX = prompt('Ingrese una Frase');
// let fraseSpliteada = fraseX.split('').filter( letra => vocales.includes(letra));

// for(let i=0; i <= fraseSpliteada.length; i ++){
//     if(aes.includes(fraseSpliteada[i])){
//         contA ++ ; 
//     }
//     else if(ees.includes(fraseSpliteada[i])){
//         contE ++ ; 
//     }
//     else if(ies.includes(fraseSpliteada[i])){
//         contI ++ ; 
//     }
//     else if(oes.includes(fraseSpliteada[i])){
//         contO ++ ; 
//     }
//     else if(ues.includes(fraseSpliteada[i])){
//         contU ++ ; 
//     }
// }


// console.log(fraseX);
// console.log('CANTIDAD DE LETRAS A: '+contA);
// console.log('CANTIDAD DE LETRAS E: '+contE);
// console.log('CANTIDAD DE LETRAS I: '+contI);
// console.log('CANTIDAD DE LETRAS O: '+contO);
// console.log('CANTIDAD DE LETRAS U: '+contU);

/* EJERCICIO 12 B*/
let aes = 'aA';
let ees = 'eE';  
let ies = 'iI'; 
let oes = 'oO';
let ues = 'uU';
let fraseX = prompt('Ingrese una Frase');

console.log(fraseX);
console.log('CANTIDAD DE LETRAS A: '+(fraseX.split('').filter(letra => aes.includes(letra))).length);
console.log('CANTIDAD DE LETRAS E: '+(fraseX.split('').filter(letra => ees.includes(letra))).length);
console.log('CANTIDAD DE LETRAS I: '+(fraseX.split('').filter(letra => ies.includes(letra))).length);
console.log('CANTIDAD DE LETRAS O: '+(fraseX.split('').filter(letra => oes.includes(letra))).length);
console.log('CANTIDAD DE LETRAS U: '+(fraseX.split('').filter(letra => ues.includes(letra))).length);





