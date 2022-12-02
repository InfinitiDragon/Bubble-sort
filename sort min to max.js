const array = [-23, 532, 5, 83, 35, -6, 31, -2, 52];

function bubbleSort(array){
  for (let j = 0; j < array.length; j++){
    for (let i = 0; i < array.length - 1; i++){
      if (array[i] > array[i + 1]){
        const result = array[i]
        array[i] = array[i + 1]
        array[i + 1] = result
      }
    }
  }
  console.log(array)
}

bubbleSort(array);