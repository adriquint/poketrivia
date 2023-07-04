"use strict";

let numero = 0;  // Se utiliza para saber el nº de pokemon a adivinar
let cantidadAcertados = 0;  // Se utiliza para saber cuantos pokemons fueron adivinados
let cantidadEncuestados = 0;  // Se utiliza para saber cuantos pokemons se intentaron adivinar

const resultText = document.querySelector("#resultText")
const imgPoke = document.querySelector("#imgpokemon")
const input = document.querySelector("input")
const puntaje = document.getElementById("puntaje")

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

    //Pruebas
    console.log(`Cantidad de encuestados: ${cantidadEncuestados}`);
    console.log(`Cantidad de acertados: ${cantidadAcertados}`);
}

restart();