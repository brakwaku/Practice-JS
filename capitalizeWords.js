const capitalize = (sentence) => {
    const words = [];
    for (let word of sentence.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }

    console.log(words.join(' '));
}

// const capitalize = (sentence) => {
//     let result = sentence[0].toUpperCase();

//     for (let i = 1; i < sentence.lenght; i++) {
//         if (sentence[i - 1] === ' ') {
//             result += sentence[i].toUpperCase();
//         } else {
//             result += sentence[i];
//         }
//     }

//     console.log(result);
// }

capitalize('kofi is a boy. But kofi is a toy');