function volverAJugar() {alert("Aqui termina tu aventura. Actualiza el navegador para volver a jugar.")};

const name = prompt("Bienvenido a una nueva aventura. Por favor, ingrese su nombre para comenzar.");

let camino = "";

let decision = "";

alert("Hola "+name+", para poder continuar, deberás elegir uno de los siguientes caminos:");

alert("El primer camino, te lleva por la ciudad mas conflictiva del condado.");

alert("El segundo camino, pasa por el medio del bosque. No parece muy peligroso...");

alert("El tercer camino.. Se desconoce absolutamente a donde va.");

camino = prompt("Elija entre el camino A, B o C.");

if(camino == "A"){
    alert("Das los primeros pasos dentro de esta inmensa oscuridad, cuando escuchas una voz. Alguien te llama..");
    decision = prompt("Deseas ir a ver? Escribe SI o NO.");
    if(decision == "SI"){
        alert("Te apuntan con un arma y te piden tu dinero. Tu vida corre peligro.");
        volverAJugar();
    }   
    if(decision == "NO"){
        alert("Empezas a correr sin rumbo alguno. Te tropezas y moris..");
        volverAJugar();
    }

}

else if(camino == "B"){
    alert("Elegiste ir por el bosque. Caminas durante media hora y encuentras una bifurcacion.");
    decision = prompt("Ponga IZQ o DER, dependiendo para que lado quiera ir.")
    if(decision == "IZQ"){
        alert("Te emboscan 3 tigres y te comen.");
        volverAJugar();
    }
    if(decision == "DER"){
        alert("Te moriste rey.")
        volverAJugar();
    }
}
else if(camino == "C"){
    alert("Elegiste el camino desconocido. Moriste sin saber que pasa.");
    volverAJugar();
}
