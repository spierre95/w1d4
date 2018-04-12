
/// PART 1

function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(index) {
  console.log('found him at index ' + index );
}

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound)

//FOR EACH LOOP SYNTAX

// array1.forEach(function(element) {
//   console.log(element);
// });


//PART 2

function findWaldo(arr, found) {
  arr.forEach(function(currentValue, index){
     if (currentValue === "Waldo") {
        found(index);   // execute callback
    }
  });

}

function actionWhenFound(index) {
  console.log('found him at index ' + index );
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound)
