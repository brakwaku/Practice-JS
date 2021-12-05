const isAnagram = (str1, str2) => {
    const sorted1 = str1.split('').sort().join('').toLowerCase();
    const sorted2 = str2.split('').sort().join('').toLowerCase();

    return (sorted1 === sorted2);
}

console.log(isAnagram('lello', 'ollle'));
console.log(isAnagram('ljello', 'ollle'));