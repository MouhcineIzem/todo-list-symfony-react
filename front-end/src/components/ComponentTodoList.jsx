import React, { useState, useEffect } from 'react';
import axios from 'axios';



const ComponentTodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('https://127.0.0.1:8000/api/items')
            .then((response) => {
                // console.log(response.data);
                response.data;
                // console.log(response.data.todos);
                setTodos(response.data.todos);
            })
            // .then((data) => {
            //     // console.log(data);
            //     setTodos(todos);
            // })
            .catch((error) => {
                console.log('Error fetching JSON data: ', error);
            })
    }, []);

    return (
        <div>
            {/*<pre>{JSON.stringify(todos, null, 2)}</pre>*/}
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ComponentTodoList;
