import axios from "axios"

const url= "https://jsonplaceholder.typicode.com/todos/2"

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response =>{

    const todo= response.data as Todo
    
    const id= todo.id;
    const title= todo.title;
    const completed= todo.completed; 

    logTodo(id,title, completed)
})

const logTodo =(id:number, title: string, completed:boolean) =>{
console.log(`
    the todo with ID: ${id}
    had a title of: ${title}
    is it finished? : ${completed}
`);
}