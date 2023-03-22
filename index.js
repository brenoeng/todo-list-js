let action = "";

const todos = [];

while (action !== 'quit' && action !== 'q') {

    action = prompt(`What would you like to do?
    - new: create new todo
    - list: list todos
    - delete: delete todo based on the index
    - quit: leave the app
    `);
    
    if (action === "new") {
        const newTodo = prompt("Enter new todo");
        todos.push(newTodo);
        alert(`You added '${newTodo}' to the list!`);
    } else if (action === "list") {
        let listaCompleta = "";
        for (todo of todos) {
            let str = `${todos.indexOf(todo)}: ${todo} \n`;
            listaCompleta = listaCompleta.concat(str);
        }
        alert(`Your Todos\n${listaCompleta}`);
    } else if (action === 'delete') {
        let indice = prompt("What's the index?");
        while (todos[indice] === undefined) {
            alert('This index does not exist');
            indice = prompt("What's the index?");
        }
        todos.splice(parseInt(indice), 1);
    }  
    else {
        if (action !== 'quit' && action !== 'q') {alert("Please, enter a valid command!")};
    }
}
console.log("Leaving the app!");