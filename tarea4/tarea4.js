// Definir las matrices de cursos de los estudiantes
let estudiante1Cursos = ['Matemáticas', 'Inglés', 'Programación'];
let estudiante2Cursos = ['Geografía', 'Español', 'Programación'];

// Recorrer las matrices y comparar los elementos
for (let i = 0; i < estudiante1Cursos.length; i++) {
  for (let j = 0; j < estudiante2Cursos.length; j++) {
    // Si hay un curso común, imprimirlo en la consola
    if (estudiante1Cursos[i] === estudiante2Cursos[j]) {
      console.log('Curso común: ' + estudiante1Cursos[i]);
    }
  }
}

// Otra forma de hacerlo es usando el método includes()
for (let curso of estudiante1Cursos) {
  // Si el curso está en la otra matriz, imprimirlo en la consola
  if (estudiante2Cursos.includes(curso)) {
    console.log('Curso común: ' + curso);
  }
}
