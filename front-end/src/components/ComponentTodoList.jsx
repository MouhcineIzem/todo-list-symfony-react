import React, { useState, useEffect } from 'react';
import useFetch from "../hooks/useFetch.jsx";
import axios from "axios";



const ComponentTodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('https://127.0.0.1:8000/api/items')
            .then((response) => {
                // console.log(response.data);
                // response.data;
                // console.log(response.data.todos);
                setTodos(response.data.todos);
            })
            .catch((error) => {
                console.log('Error fetching JSON data: ', error);
            })
    }, []);

    const handleChange = (id) => {
        const todoIndex = todos.findIndex((todo) => todo.id === id);

        if (todoIndex !== -1) {
            const updatedTodos = [...todos];

            if (updatedTodos[todoIndex].state == 'complete') {
                updatedTodos[todoIndex].state = 'incomplete'
            } else {
                updatedTodos[todoIndex].state = 'complete'
            }

            if (updatedTodos[todoIndex].state == 'complete') {
                const [completedTodo] = updatedTodos.splice(todoIndex, 1);
                updatedTodos.push(completedTodo);
            }

            setTodos(updatedTodos);
        }
    }

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}
                        style={{ textDecoration: todo.state == 'complete' ? 'line-through' : 'none'}}
                    >
                        <input
                            type="checkbox"
                            checked={todo.state == 'complete'}
                            onChange={() => handleChange(todo.id)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ComponentTodoList;
