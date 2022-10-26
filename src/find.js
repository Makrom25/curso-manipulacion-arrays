const numbers = [1, 30, 49, 29, 10, 13];

const rta = numbers.find(item => item === 30);

console.log(rta);

const products = [
    {
        name: "Pizza",
        price: 12,
        id: '🍕'
    },
    {
        name: "Burger",
        price: 23,
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 34,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '🥞'
    },
];

const rta3 = products.find(item => item.price === 355)
console.log(rta3)