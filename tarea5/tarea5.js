//Imprime la lista de las personas 
let gente = ["María", "Dani", "Luis", "Juan", "Camila"];
console.log(gente.join(", "));

//Para eliminar "Dani" de la matriz con metodo `splice()`
let gente1= ["María", "Dani", "Luis", "Juan", "Camila"];
gente1.splice(1, 1); // quita un elemento en el índice 1
console.log(gente1); // ["María", "Luis", "Juan", "Camila"]

//Para eliminar "Juan" del array, podemos hacer lo mismo que antes, pero usando el índice 2
let gente2 = ["María", "Luis", "Juan", "Camila"];
gente2.splice(2, 1); // quita un elemento en el índice 2
console.log(gente2); // ["María", "Luis", "Camila"]

//Mover a "Luis" al frente de la matriz
let gente3 = ["María", "Luis", "Camila"];
let primero = gente3.shift(); // quita y devuelve el primer elemento
gente.unshift("Luis"); // añade un nuevo elemento al principio
console.log(gente3); // ["Luis", "Camila"]

//Agregar mi nombre al final de la matriz
let gente4 = ["Luis", "Camila"];
gente4.push("Itzel"); // añade un nuevo elemento al final
console.log(gente4); // ["Luis", "Camila", "Itzel"]

//Usamos un bucle, podemos iterar a través de la matriz y usar una sentencia `break` para salir del bucle después de mostrar "María"
let gente5 = ["Luis", "Camila", "Itzel"];
for (let persona of gente5) {
  console.log(persona);
  if (persona === "María") {
    break; // sale del bucle
  }
}

//obtener el índice donde se encuentra "María"
let gente6 = ["Luis", "Camila", "Itzel"];
let indice = gente6.indexOf("María"); // devuelve -1 porque no está en la matriz
console.log(indice);

//Agregar a  "María"
let gente7 = ["Luis", "Camila", "Itzel"];
gente7.push("Maria");
console.log(gente7);
