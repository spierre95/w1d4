var words = ["ground", "control", "to", "major", "tom"];


var lengthArray = customMap (words,function(word) {
  return word.length
})

var UppercaseArray = customMap(words, function(word) {
  return word.toUpperCase();
});


var reverseArray = customMap(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(lengthArray,UppercaseArray,reverseArray);

function customMap(arr, action) {
    var resultArray = []
    if(!action){
      return arr
    } else {
      for (var i = 0; i < arr.length; i++){
      resultArray.push(action(arr[i]));
      }
      return resultArray;
    }
}



