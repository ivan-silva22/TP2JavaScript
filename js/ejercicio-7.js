let numero = parseInt(prompt("Ingrese el numero de repeticiones: "));

if(Number(numero) === numero){
    if (numero > 0 && numero <= 50){
        for (i = numero; i >= 1; i--) {
            for (k = i; k >= 1; k--) {
                document.write(i);
            }
            document.write("<br>");
        }
    }
}else {
    alert("El valor introducido no es válido");
}