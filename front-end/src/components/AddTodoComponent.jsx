import React, { useState} from "react";
import axios from 'axios';
import useFetch from "../hooks/useFetch.jsx";


const AddTodoComponent = () => {
    const [todos, setTodos] = useFetch();
    const [newTodo, setNewTodo] = useState({
        id: '',
        title: '',
        description: '',
        state: 'incomplete'
    });

    const handleInputChange= (event) => {
        let title, description;
        const { name, value } = event.target;
        if (name == 'desrition') {
            description = value;
        }
        if (name == 'title') {
            title = value;
        }

        setNewTodo({
            id: todos.length + 1,
            title: 'HTML',
            description: description,
            state: 'incomplete'
        });
        // console.log(newTodo);
    }

    const createTodo = async () => {
        console.log(newTodo);
        try {
            if (newTodo.title.trim() === '') {
                alert('Todo title is required.');
                return;
            }
            const response = await axios.post('https://127.0.0.1:8000/api/todos', newTodo);

            if (response.status === 201) {
                console.log(response);
                setTodos([...todos, response.data]);
                setNewTodo({
                    id: '',
                    title: '',
                    description: '',
                    state: 'incomplete'
                });
            } else {

            }
        } catch (error) {
            console.log('Error creating TODO: ', error);
        }
    }

    return (
        <div>
            <h1>Todo List</h1>
            <form>
                <input
                    type="text"
                    name="title"
                    placeholder="Todo title"
                    onChange={handleInputChange}
                />
                <textarea
                    name="description"
                    placeholder="Todo description"
                    onChange={handleInputChange}
                />
                <button type="button" onClick={createTodo}>
                    Add Todo
                </button>
            </form>
        </div>
    )
}


export default AddTodoComponent;

