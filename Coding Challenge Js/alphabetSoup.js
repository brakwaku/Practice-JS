function AlphabetSoup(str) {
  return str.split("").sort().join("");
}

// keep this function call here
AlphabetSoup(readline());

/**************************
 * Solution 2
 *************************/

// function AlphabetSoup(str) {
//   var orig = str.split("");
//   var alpha = "abcdefghijklmnopqrstuvwxyz";
//   alpha = alpha.split("");
//   var order = [];

//   // go through alpha as a list
//   for (i = 0; i < alpha.length; i++) {
//     for (j = 0; j < orig.length; j++) {
//       // push the letters one at a time if there's a match to a third array order
//       if (alpha[i] === orig[j]) {
//         order.push(alpha[i]);
//       }
//     }
//   }
//   // join the third array order
//   var res = order.join("");
//   return res;
// }
