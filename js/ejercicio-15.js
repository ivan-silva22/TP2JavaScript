let cadena = prompt("Ingrese un texto");
let contador = 0;

cadena = cadena.toLowerCase();

for(i = 0; i < cadena.length; i++){
    let caracter = cadena.charAt(i);
    if(caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u"){
        contador++;
    }
}

document.write("Número de Vocales: " + contador + ".");