
const str = 'The quick brown fox jumped over the lazy dog';

const longestString = (str) => {
    const strArray = str.split(' ').sort((strA, strB) => {
        return strB.length - strA.length;
    });

    return strArray;
}

console.log(longestString(str));

// REMOVING WHITE SPACES IN A STRING
const theString = " Sometimes you wish you could wish for a lot of wishes. "

const endsSpace = theString.trim();
const noSpace = theString.replace(/\s/g, '');
const anotherSpace = theString.split(' ').join('');
console.log(noSpace);