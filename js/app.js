"use strict";

const resultText = document.querySelector("#resultText")
const imgPoke = document.querySelector("#imgpokemon")
const input = document.querySelector("input")
const puntaje = document.getElementById("puntaje")

let numero = 0;

// -- Leer valor de Session Storage --
let acertadosStorage = (parseInt(sessionStorage.getItem("acertados")))
let encuestadosStorage = parseInt(sessionStorage.getItem("encuestados"))
console.log(acertadosStorage)
console.log(encuestadosStorage)

let cantidadAcertados =  acertadosStorage > 0 ? acertadosStorage : 0;  
let cantidadEncuestados = encuestadosStorage > 0 ? encuestadosStorage : 0; 
console.log(cantidadAcertados)
console.log(cantidadEncuestados)

// -- Leer datos Json --
const data = JSON.parse(jsonData)

// -- Armar lista pokemons y crear objetos Pokemon --
let pokemons = [];
for(const pokeData of data) {
    pokemons.push(new Pokemon(
                    pokeData.id,
                    pokeData.name,
                    pokeData.thumbnail
                        )
                );
}

// -- Programa trabaja con lista de objetos pokemons --
function restart() {    
    resultText.textContent = ""
    imgPoke.classList.remove("success") 
    numero = Math.round(Math.random()*(pokemons.length));
    imgPoke.src = (pokemons[numero].thumbnail);
    input.value = "";

    //Pruebas
    console.log(`Numero random: ${numero}`);
    console.log(`"Id" poke: ${pokemons[numero].id}`)
    console.log(`Nombre poke: ${pokemons[numero].name}`); 
}

function resultado() {
    console.log("--Funcion resultado--");
    cantidadEncuestados = (cantidadEncuestados + 1);
        
    (input.value) === (pokemons[numero].name) ? (
        resultText.textContent = "-> ¡Felicitaciones! Respuesta correcta",
        imgPoke.classList.add("success"),
        cantidadAcertados = cantidadAcertados + 1,
        console.log("Respuesta correcta")
    ) : (
        resultText.textContent = "-> RESPUESTA INCORRECTA",
        imgPoke.classList.remove("success"),
        console.log("Respuesta incorrecta")
        );
    
    (cantidadAcertados) >= (cantidadEncuestados / 2) ? (
        puntaje.classList.remove("puntajeBajo"),
        console.log("Puntaje bueno")
    ) : (
        puntaje.classList.add("puntajeBajo"),
        console.log("Puntaje bajo")
    );
    puntaje.innerText = `Puntaje ${cantidadAcertados} de ${cantidadEncuestados}`
    
    //Pruebas
    console.log(`Cantidad de encuestados: ${cantidadEncuestados}`);
    console.log(`Cantidad de acertados: ${cantidadAcertados}`);
}
   console.log(`Cantidad de encuestados: ${cantidadEncuestados}`);
    console.log(`Cantidad de acertados: ${cantidadAcertados}`);
restart();