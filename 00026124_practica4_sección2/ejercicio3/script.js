
function ordenar(arr) {
    const nuevoArray = [...arr]; 
    for (let i = 0; i < nuevoArray.length; i++) {
        for (let j = 0; j < nuevoArray.length - i - 1; j++) {
            if (nuevoArray[j] > nuevoArray[j + 1]) {
                // Intercambiar valores
                let temporal = nuevoArray[j];
                nuevoArray[j] = nuevoArray[j + 1];
                nuevoArray[j + 1] = temporal;
            }
        }
    }
    return nuevoArray;
}

const arrayOriginal = [14, 23, 99, 874, 93, 12];
console.log(ordenar(arrayOriginal));
document.getElementById('arrayOrdenado').textContent = ordenar(arrayOriginal).join(', ');

function esPar(numero) {
    return numero % 2 === 0;
}

console.log(esPar(7));
document.getElementById('numeroPar').textContent = esPar(7);

function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
    let altura = 0;
    let dias = 0;

    while (altura < alturaDeseada) {
        altura += velocidadCrecimiento; 
        dias++;
        if (altura >= alturaDeseada) {
            return dias; 
        }
        altura -= velocidadDecrecimiento; 
    }

    return dias;
}

console.log(calcularDiasCrecimiento(2, 1, 5));
document.getElementById('diasPlanta').textContent = calcularDiasCrecimiento(2, 1, 5);
