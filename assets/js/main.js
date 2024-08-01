
//TRUE o 1
//FALSE o 0


// Función para verificar la disponibilidad de los ingredientes
function verificarIngredientes(cafe, agua, leche) {
    //cafe y agua son booleanos (true, false)
    if (cafe && agua) {
        if (leche) {
            return "Puedes hacer un café con leche";
        } else {
            return "Puedes hacer un café negro";
        }
    } else {
        return "No tienes suficientes ingredientes";
    }
}

// Los siguientes valores son "falsy" en JavaScript:
// 1. false - El valor booleano false.
// 2. 0 - El número cero.
// 3. -0 - El número negativo cero.
// 4. 0n - El BigInt cero.
// 5. "" (o '' o ``) - Una cadena vacía.
// 6. null - El valor nulo.
// 7. undefined - El valor indefinido.
// 8. NaN - El valor "Not-a-Number".
// 9. [] - Un arreglo vacío.

// Función para verificar el estado de la máquina de café
function verificarMaquinaDeCafe(encendida, limpia) {
    // encendida y limpia son valores bool true o false 
    if (encendida && limpia) {
        return "La máquina está lista para usar";
    } else if (!encendida) {
        // Operador logico de negacion de negacion
        // Altera la condicion logica booleana!
        // si yo recibo true y digo !true entonces es false
        // si yo recibo false y digo !false entones es true
        return "La máquina de café está apagada";
    } else {
        return "La máquina de café necesita limpieza";
    }
}

// Función principal para verificar si se puede hacer una taza de café
function puedeHacerCafe(cafe, agua, leche, encendida, limpia) {
    const estadoIngredientes = verificarIngredientes(cafe, agua, leche);
    const estadoMaquina = verificarMaquinaDeCafe(encendida, limpia);

    if (estadoIngredientes.includes("café") 
        && estadoMaquina === "La máquina está lista para usar") {
        return `Sí, ${estadoIngredientes}`;
    } else {
        return `No, ${estadoIngredientes} y ${estadoMaquina}`;
    }
}

// Ejecución
const tieneCafe = true;
const tieneAgua = true;
const tieneLeche = true;
const maquinaEncendida = true;
const maquinaLimpia = true;

console.log(puedeHacerCafe(tieneCafe, tieneAgua, tieneLeche, maquinaEncendida, maquinaLimpia));

// Operador ternario para determinar el tipo de café
const tipoCafe = tieneLeche ? "café con leche" : "café negro";

maquinaEncendida ? console.log(`Hoy puedes hacer un ${tipoCafe}`) : console.log(`No hay electricidad`)

// Operadores lógicos para verificar si se puede hacer café
const ingredientesListos = tieneCafe && tieneAgua;
const maquinaLista = maquinaEncendida && maquinaLimpia;
const advertencia = !ingredientesListos || !maquinaLista ? "No puedes hacer café" : "Todo listo para hacer café";
console.log(advertencia);




// == (COMPARAR VALORES, SI UNO ES IGUAL AL OTRO) 
// === (COMPARAR VALORES Y ADEMAS TIPO DE DATO)
// let numero = '2'
// if(numero === 2){
//     console.log('Es un número')
// }
// if(numero == 2){
//     console.log('Es un número')
// }