// let parrafos = document.getElementsByTagName("p");
// console.log(parrafos);

// let segundoParrafo = parrafos[1].innerHTML;
// console.log(segundoParrafo);


// let parrafoNuevo = document.getElementById("parrafo1");
// document.write("El contenido del 1 es: "+ parrafoNuevo.innerHTML);

// document.getElementById('parrafo1').innerHTML = "contenido nuevo maestro";

// document.getElementById('parrafo3').style.color= "red";

// const tituloPagina = document.querySelector("h2");
// console.log(tituloPagina);

// const tituloPagina2 = document.querySelector("#elSegundo");
// console.log(tituloPagina2);


// let palabra = prompt('Ingrese una frase');
// let letra = prompt("Ingrese letra para contar cantidad");

// let palabraSplit = palabra.split('');
// let cont = 0;
// console.log(letra);
// console.log(palabraSplit);

// palabraSplit.forEach( element =>{
//     if(element === letra){
//         cont ++;
//     }
// });

// alert('La cantidad de letras '+letra+' es: '+cont);


function mensaje(){
    let palabra = prompt('Ingrese una frase');
    let letra = prompt("Ingrese letra para contar cantidad");

    let palabraSplit = palabra.split('');
    let cont = 0;
    console.log(letra);
    console.log(palabraSplit);

    palabraSplit.forEach( element =>{
    if(element === letra){
        cont ++;
    }
});

alert('La cantidad de letras '+letra+' es: '+cont);
}
const boton = document.querySelector("#botoncito");
boton.addEventListener("click",mensaje);