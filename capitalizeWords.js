// const capitalize = (sentence) => {
//     const words = [];
//     for (let word of sentence.split(' ')) {
//         words.push(word[0].toUpperCase() + word.slice(1));
//     }

//     console.log(words.join(' '));
// }

const capitalize = (sentence) => {
    const words = [];
    for (let word of sentence.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }

    console.log(words.join(' '));
}

capitalize('Kofi is a boy. But kofi is a toy');