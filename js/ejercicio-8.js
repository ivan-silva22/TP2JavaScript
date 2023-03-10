let numero = parseInt(prompt("Ingrese el numero de repeticiones: "));

if(Number(numero) === numero){
    if (numero > 0 && numero <= 50){
        for (i = 1; i <= numero; i++) {
            for (k = 0; k < i; k++) {
                document.write(i);
            }
            document.write("<br>");
        }
    }
}else {
    alert("El valor introducido no es válido");
}