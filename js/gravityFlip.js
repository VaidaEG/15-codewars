/*
URL: https://www.codewars.com/kata/5f70c883e10f9e0001c89673
*/

const flip=(d, a)=> {
    const sorted = a.sort((sk1, sk2) => sk1 - sk2);

    if (d === 'L'){
        return sorted.reverse();
    }
    if (d === 'R') {
        return sorted;
    }
}
// Galima parasyti sutrumpintai:
// const flip=(d, a)=> {
//     const sorted = a.sort((sk1, sk2) => sk1 - sk2);
//     return d === 'R' ? sorted : sorted.reverse();
// }
console.log(flip('R', [3, 2, 1, 2]), [1, 2, 2, 3]);
console.log(flip('L', [1, 4, 5, 3, 5]), [5, 5, 4, 3, 1]);