//LOGICA... NECESITO MANDAR UN 1 Y UN 1
/*
function fibonacci(num) {
  //5

  let array = [1, 1];

  if (num == 1) {
    return (array = [1]);
  }
  if (num == 2) {
    return (array = [1, 1]);
  }

  if (num >= 2) {
    for (let index = 0; index < num - 2; index++) {
      array.push(array[array.length - 1] + array[array.length - 2]);
    }
    return array;
  }
}

console.log(fibonacci(20));
*/

function fibonacci(num) {

    let array = [1,1];

    if (num < 1) {
        return array = []
        
    }
    
    if (num < 2){
        return array = [1]
    }
    if (num < 3){
        return array = [1, 1]
    }

    if (num >= 2){
        
        for (let index = 0; index < (num-2); index++) {
           array.push((array[array.length -1] )+ (array[array.length - 2]))
        }
        return array
    }
}

console.log(fibonacci(0))