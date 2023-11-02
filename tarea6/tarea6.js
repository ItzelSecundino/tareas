function bubbleSort(array) {
  let n = array.length;

  
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  return array;
}

let input = [3, 6, 12, 5, 100, 1];
let output = bubbleSort(input);
console.log(output); 
