// There is a large pile of socks that must be paired by color. Given an array of integers
// representing the color of each sock, determine how many pairs of socks with matching
// colors there are.

function sockMerchant(n, ar) {
  ar = ar.sort();
  let pairs = 0;
  for (let i = 0; i < n - 1; i++) {
    if (ar[i] === ar[i + 1]) {
      pairs++;
      i += 1;
    }
  }

  // let sorted = ar.sort( (a,b) => a - b);
  // for (let i = 0; i < n - 1; i++) {
  //     if ( sorted[i] === sorted[i + 1]) {
  //         pairs++;
  //         i += 1;
  //     }
  // }

  return pairs;
}

sockMerchant(7, [1,2,1,2,1,3,2])