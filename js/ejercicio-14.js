let cadena = prompt("Ingrese un texto");

for (i = 0; i < cadena.length; i++){
    let caracter = cadena.charAt(i);
    if(i === cadena.length - 1){
        document.write(caracter);
    }else{
        document.write(caracter + "-");
    }
}

