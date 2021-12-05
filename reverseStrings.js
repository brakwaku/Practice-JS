const reversedString_1 = (str_1) => {
    return str_1.split('').reverse().join('');
}


const reversedString_2 = (str_2 = 'March') => {
    let reversed_2 = '';

    for(let character of str_2) {
        reversed_2 = character + reversed_2
    }

    return reversed_2;
}

console.log(reversedString_2());

const reversedString_3 = (str_3) => {
    return str_3.split('').reduse((reversed_3, character_3) => {
        return character_3 + reversed_3;
    }, '');
}

const reversedString_3Alt = (str_3A) => {
    return str_3A.split('').reduse((rev_3A, char_3A) => char_3A + rev_3A, '');
}


/****REVERSE INTEGERS*******/

const reverseInt = (num_1) => {
    const reversedInt_1 = num_1.toString().split('').reverse().join('');

    if(num_1 < 0) {
        return parseInt(reversedInt_1) * -1;
    }

    return parseInt(reversedInt_1);
}

const reverseInt = (num_1) => {
    const reversedInt_1 = num_1.toString().split('').reverse().join('');

    num_1 < 0 ? (parseInt(reversedInt_1) * -1) : parseInt(reversedInt_1)

    return parseInt(reversedInt_1);
}

reverseInt(5483);

const reverseIntAlt = (num) => {
    const reversedInt_2 = num.toString().split('').reverse().join('');

    return parseInt(reversedInt_2) * Math.sign(num);
}