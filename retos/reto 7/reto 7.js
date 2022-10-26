const team = [
    {
        name: "Nicolas",
        age: 19,
    },
    {
        name: "Andrea",
        age: 28,
    },
    {
        name: "Zulema",
        age: 22,
    },
    {
        name: "Santiago",
        age: 18,
    },
];
const ages = team.map(item => item.age);
console.log(ages);

console.log('¿Son todos mayores de edad?');

const areMinors = team.every(number => number.age >= 18);

console.log(areMinors);

if(areMinors === true) {
    console.log('Puedes participar en la competición!!');
} else {
    console.log('No puedes participar en esta competición');
};