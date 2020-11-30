/**
 * Isrikiuoti sarase esancius zmoniu objektus, pagal ju amziu nuo jauniausio link vyriausio.
 * @param {Object[]} people Sarasas zmoniu, kurie pateikti kaip objektai
 * @param {string} people[].name Asmens vardas
 * @param {number} people[].age Asmens amzius
 * @returns {Array<Object>} Sarasas zmoniu, kurie pateikti kaip objektai, kurie yra isrikiuoti pagal amziu.
 */

function peopleByAge(people) {
    return people.sort((p1, p2) => p1.age - p2.age );
    // Jeigu norime isrikiuoti nuo viriausio iki jauniausio:
    // return people.sort((p1, p2) => p2.age - p1.age );
}

const peopleList = [
    {
        name: 'Petras',
        age: 87
    },
    {
        name: 'Marytė',
        age: 85
    },
    {
        name: 'Petriukas',
        age: 46
    },
    {
        name: 'Onutė',
        age: 50
    }
];

// Taip pat pasinaudojus sia funkcija, galima pakeisti rikiavima i nuo vyriausio iki jauniausio, tam reikia pasidaryti kopija.
const sortedPeople = peopleByAge(peopleList); 
const reverseSort = [...sortedPeople].reverse();
console.log(sortedPeople);
console.log(reverseSort);

const a = [8, 7, 5];
// Jeigu norime padaryti kintamojo a kopija, padarome jos tekstine kopija su JSON.stringify(a) ir atsatome sutekstinta versija su JSON.parse
const b = JSON.parse(JSON.stringify(a));

const val = [4, 7];
console.log(val);
let val2 = [...val];
console.log(val2);
val[0] = 99;
console.log(val);
console.log(val2);

// Galima prideti nauja reiksme
val2.push(45);
console.log(val2);
val2.push(45);
console.log(val2);

val2.unshift(1);
console.log(val2);

//Papildome nauju nariu isskleisdami kintamojo kopija:
val2 = [-6, ...val2];
console.log(val2);

let person = {
    name: 'Vardenis',
    age: 99
}
console.log(person);
// Objektui galima priskirti nauja savybe:
person.location = 'LTU';
console.log(person);
// arba
person = {driving: true, ...person};
console.log(person);

//funkcijai galima perduoti visas reiksmes:
function sum(...num) {
    let totalSum = 0;
    console.log(num);
    return totalSum;
}
const total = sum(2, 2, 8, 4, 7);
