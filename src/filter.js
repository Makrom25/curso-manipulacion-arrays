
const newArray = [];
console.log('original', words);
for (let index = 0; index < words.length; index++) {
        const item = words[index];
        if (item.length >= 6) {
                    newArray.push(item);
            }
        }
        
        const words = ['spay','limit','elite','exuberant'];
const orders = [

    {
        customerName: 'Nicolas',
        total: 90,
        delivered: true,
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true,
    },
    {
        customerName: 'Jennifer',
        total: 240,
        delivered: true,
    }
]


// const rta = words.filter(item => item.length >= 6)
//////////////////////////////////////////////////

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}
console.log(search('Nico'))   
const palabras = ['amor', 'sol', 'piedra', 'día'];

const reduce = palabras.filter(reducer => reducer.length >= 4)

console.log(reduce);