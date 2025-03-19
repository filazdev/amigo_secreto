// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigosArray = [];
let listaAmigos = document.getElementById("listaAmigos");

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;

    if (amigo.trim() === "") {
        alert("Ingrese un nombre");
        return;
    }

    listaAmigosArray.push(amigo);

    listaAmigos.innerHTML += `<li>${amigo}</li>`;

    document.getElementById("amigo").value = "";
}

function sortearAmigo() {
    if (listaAmigosArray.length === 0) {
        alert("Primero debe añadir nombres");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigosArray.length);

    let amigoSecreto = listaAmigosArray[indiceAleatorio];

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;

    listaAmigos.innerHTML = "";
    
    listaAmigosArray = [];
}