var vocales = ["a", "e", "i", "o", "u"];
let cadena = prompt("Ingrese un texto:");
let posicion = 0;
let pararCiclo = false;

cadena = cadena.toLowerCase();

for(i = 0; i < cadena.length; i++){
    for(k = 0; k < vocales.length; k++){
        if(vocales[k] === cadena.charAt(i)){
            posicion = i;
            pararCiclo = true;
            break;
        }
    }
    if(pararCiclo){
        break;
    }
}

document.write(`<h1>La primera vocal está en la posición: ${posicion}</h1>`);