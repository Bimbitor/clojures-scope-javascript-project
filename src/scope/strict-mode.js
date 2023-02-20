'use strict'; 

/* Esto limita la flexibilidad del interprete y deshabilita features como:
    - hoisting
    - lanza error en los atributos de solo lectura, de otra manera no dice nada
    - lanza error en los objetos no extensibles, de otra manera no dice nada
    - no permite parametrós duplicados
    - lanza error al usar DELETE en algún objeto o variable, de otra manera no dice nada
 */


pi = 3.1416; //ERROR
console.log(pi);

function myFunction() {
    return pi = 3.1416;
}

console.log(myFunction());



function myFunctionStrict() {
    
    //Can define strict mode in global script (doc) or only for a function, like this
    'use strict';
    return pi = '3.1416';
}

console.log(myFunctionStrict());