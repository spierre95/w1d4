var tweeps = [
  {who: '@mozilla', what:'mozilla all your data belongs to us'},
  {who: '@wired', what:'Wired: the AI will scan your bitcoins'},
  {
    who:'@fzero',
    what: 'I love cats'
  }
];

tweeps.push({who:'@creativecommons', what:'CC0'})

tweeps[2].fav = true;

// function likeTweeps(tweep){
//   for (var i = 0; i < tweeps.length; i++){
//     if(tweeps[i].who == tweep){
//       if (tweeps[i].like) {
//         tweeps[i].like += 1;
//       } else {
//         tweeps[i].like = 1;
//       }
//     }
//   }
// }

// likeTweeps('@fzero');
// likeTweeps('@mozilla')
// likeTweeps('@mozilla')
// flagTweeps('@wired')

// extrmeely important and used skill!!!
// console.log(tweeps[2].what);
// console.log(tweeps[3]['who']);

// function flagTweeps(tweep){
//   for (var j = 0; j < tweeps.length; j++){
//     if(tweeps[j].who == tweep){
//       if (tweeps[j].flag) {
//         tweeps[j].flag += 1;
//       } else {
//         tweeps[j].flag = 1;
//       }
//     }
//   }
// }

function changeTweeps(tweep, action){
  for (var j = 0; j < tweeps.length; j++){
    if(tweeps[j].who == tweep){
      if (tweeps[j][action]) {
        tweeps[j][action] += 1;
      } else {
        tweeps[j][action] = 1;
      }
    }
  }
}

changeTweeps('@fzero','like')
changeTweeps('@fzero','like')
changeTweeps('@fzero','like')
changeTweeps('@fzero','like')
changeTweeps('@mozilla','like')
console.log(tweeps)