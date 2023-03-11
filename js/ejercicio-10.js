let fila = parseInt(prompt('Ingrese el número de filas:'));
let columna = parseInt(prompt('Ingrese el número de columnas:'));
let resultado = 0;

resultado = fila * columna;

document.write('<table border>');

for(i = 0; i < fila; i++){
    document.write('<tr>');
    for(k = 0; k < columna; k++){
        document.write('<td>');
        document.write(resultado);
        resultado--;
        document.write('</td>');
    }
    document.write('</tr>');
}
document.write('</table>');