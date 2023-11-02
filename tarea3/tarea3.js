function suma(a, b) {
  return a + b;
}

function producto(a, b) {
  return a * b;
}
let numeros = [1, 2, 3, 4];

let sumaTotal = numeros.reduce(suma);

let productoTotal = numeros.reduce(producto);

console.log("La suma es " + sumaTotal + ".");
console.log("El producto es " + productoTotal + ".");
