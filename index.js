let action = "";

const todos = [];

while (action !== 'quit') {

    action = prompt(`What would you like to do?
    - new: create new todo
    - list: list todos
    - delete: delete todo based on the index
    - quit: leave the app
    `);
    
    if (action === "new") {
        const newTodo = prompt("Enter new todo");
        todos.push(newTodo);
        alert('New task added!');
    } else if (action === "list") {
        for (todo of todos) {
            console.log(`${todos.indexOf(todo)}: ${todo}`);
        }
        console.log('-------------------------------');
    } else if (action === 'delete') {
        let indice = prompt('Qual o indice do todo?');
        while (todos[indice] === undefined) {
            console.log('This index does not exist');
            indice = prompt('Qual o indice do todo?');
        }
        todos.splice(parseInt(indice), 1);
    }  
    else {
        if (action !== 'quit') {console.log("Please, enter a valid command!")};
    }
}
console.log("Leaving the app!");