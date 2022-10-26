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
console.log('original', orders);
const rta = orders.map(item => item.total);
 


const rta2 = orders.map(item => {
    
    return {
        ...item,
        tax: .19,
    }
});
console.log('rta2', rta2);

