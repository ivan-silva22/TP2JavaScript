for (i = 1; i <= 500; i++) {

    document.write(i);

    if (i % 4 === 0) {
        document.write(" (Multiplo de 4)");
    }

    if (i % 9 === 0) {
        document.write(" (Multiplo de 9)");
    }

    document.write("<br>");

    if (i % 5 === 0) {
        document.write("<hr>");
    }
}