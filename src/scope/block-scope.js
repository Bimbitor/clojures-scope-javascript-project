function fruits() {
    if (true) {
        var fruit1 = 'Apple'; // function scope, funciona dentro del bloque padre o total de la función
        
        // llegó ECMASCRIPT 6 y los nuevos tipos de variables ahora tienen un scope tipo block
        
        let fruit2 = 'Kiwi'; // block scope, funciona solo dentro de los parentesis donde es declarada o en jerarquía menor
        const fruit3 = 'Banana'; // block scope
    }
    console.log(fruit1); // 'Apple'
    console.log(fruit2); // ERROR
    console.log(fruit3); // ERROR
}

fruits();