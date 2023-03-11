let cadena = prompt("Ingrese un texto:");
let mostrar = "";

for(i = 0; i < cadena.length; i ++){
    let caracter = cadena.charAt(i);
    mostrar = caracter + mostrar; 
}

document.write(`<h1>${mostrar}</h1>`);