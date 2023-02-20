function saludo() {
    var nombre = "Andres" // Function Scope, debido a que definimos el tipo de variable VAR
    console.log(nombre)
}

saludo()
console.log(nombre) // Dispara ERROR, porque estamos fuera de la función




// Otro ejemplo
function greeting() {
    var userName = 'Ana'; // Function Scope
    console.log(userName);
    
    if (userName === 'Ana') {
        console.log(`Hello ${userName}!`)
    }
    
}

greeting();
console.log(userName); // Here Cannot Access