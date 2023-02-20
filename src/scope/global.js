let fruit = 'Apple'; // global
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Colombia'; // Al declarar una variable de esta manera, sin definir el tipo de variable, se hará global automáticamente. No es buena práctica.
    console.log(country);
}

countries();
console.log(country);