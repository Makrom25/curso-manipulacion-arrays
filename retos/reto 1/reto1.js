const tasks = [
    {   
        title: 'lavar platos',
        done: false,
    },
    {
        title: 'Sacar al perro',
        done: true,
    },
    {
        title: 'Estudiar',
        done: false,
    }
];

const inner = document.querySelector('#tasks');
const input = document.querySelector('.checkBox');
tasks.forEach(task => {
    inner.innerHTML += `<li> <input 
    type='checkbox' class='checkBox'>${task.title} - ${task.done}</li>`

})


