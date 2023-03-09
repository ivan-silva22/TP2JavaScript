let contador = 0;
let suma = 0;

do {
    let numero = parseInt(prompt("Ingrese un número:"));
    if(Number.isInteger(numero)){
        suma = suma + numero; 
        contador++; 
    }else{
        alert("No es un número");
    }
} while (confirm("¿Desea continuar ingresando numeros?"));

document.write(`La suma de los números es: ${suma}`);