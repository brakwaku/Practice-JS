// const printTree = (num) => {
//   let i, j;
//   //outer loop
//   for (i = 1; i <= num.length; i++) {
//     //inner loop
//     for (j = 1; j <= i; j++) {
//       console.log("*");
//     }
//     console.log("<br/>");
//   }
// };

// printTree(6);

// const christmasTreeStar = (width, height) => {
//   let space = width * height;
//   let n = 1;

//   for (let x = 1; x <= height; x++) {
//     for (let i = n; i <= width; i++) {
//       for (let j = space; j >= i; j--) {
//         console.log(" ");
//       }
//       for (let k = 1; k <= i; k++) {
//         console.log("* ");
//       }
//       console.log("\n");
//     }
//     n = n + 2;
//     width = width + 2;
//   }

//   for (let i = 1; i <= height - 1; i++) {
//     for (let j = space - 3; j >= 0; j--) {
//       console.log(" ");
//     }
//     for (let k = 1; k <= height - 1; k++) {
//       console.log("* ");
//     }
//     console.log("\n");
//   }
// };

// christmasTreeStar(5, 4);

const christmasTreePattern = (width, height, character) => {
  let space = width * height;
  let i,
    j,
    k,
    n = 1;

  for (let x = 1; x <= height; x++) {
    for (i = n; i <= width; i++) {
      for (j = space; j >= i; j--) {
        console.log(" ");
      }
      for (k = 1; k <= i; k++) {
        console.log(character + " ");
      }
      console.log("\n");
    }
    n = n + 2;
    width = width + 2;
  }
  for (i = 1; i <= height - 1; i++) {
    for (j = space - 3; j >= 0; j--) {
      console.log(" ");
    }
    for (k = 1; k <= height - 1; k++) {
      console.log(character + " ");
    }
    console.log("\n");
  }
};

christmasTreePattern(9, 5, '*');