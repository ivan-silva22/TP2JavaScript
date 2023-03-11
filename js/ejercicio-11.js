let primerNombre = prompt("Ingrese el primer nombre");
let primeraEdad = parseInt(prompt("Ingrese la edad:"));

let segundoNombre = prompt("Ingrese el segundo nombre");
let segundaEdad = parseInt(prompt("Ingrese la edad:"));

let tercerNombre = prompt("Ingrese el tercer nombre");
let terceraEdad = parseInt(prompt("Ingrese la edad:"));

let mayor = Math.max(primeraEdad,segundaEdad,terceraEdad);

if(mayor === primeraEdad){
    document.write(`${primerNombre} es el mayor`);
}else if(mayor === segundaEdad){
    document.write(`${segundoNombre} es el mayor`);
}else if(mayor === terceraEdad){
    document.write(`${tercerNombre} es el mayor`);
}

