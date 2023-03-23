let action = "";

const todos = [];

while (action !== 'quit' && action !== 'q') {

    action = prompt(`What would you like to do?
    - new: create new to do
    - list: list to dos
    - delete: delete to do based on the index
    - quit: leave the app
    `);
    
    if (action === "new") {
        const newTodo = prompt("Enter new to do");
        todos.push(newTodo);
        alert(`You added '${newTodo}' to the list!`);
    } else if (action === "list") {
        let listaCompleta = "";
        for (todo of todos) {
            let str = `${todos.indexOf(todo)}: ${todo} \n`;
            listaCompleta = listaCompleta.concat(str);
        }
        alert(`Your To dos\n${listaCompleta}`);
    } else if (action === 'delete') {
        let indice;

        while (todos[indice] === undefined) {
            
            let listaCompleta = "";
            for (todo of todos) {
                let str = `${todos.indexOf(todo)}: ${todo} \n`;
                listaCompleta = listaCompleta.concat(str);
            }   
            // alert(`Your To dos\n${listaCompleta}`);
            
            indice = prompt(`What's the index?\n${listaCompleta}`);
            if (todos[indice] === undefined) {alert('This index does not exist')};
        }
        alert(`You have deleted ${todos[indice]} from your to do list!` );
        todos.splice(parseInt(indice), 1);
    }  
    else {
        if (action !== 'quit' && action !== 'q') {alert("Please, enter a valid command!")};
    }
}
alert("Leaving the app!");