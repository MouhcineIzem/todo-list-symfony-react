import React, { useState, useEffect } from 'react';
import axios from 'axios';



const ComponentTodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('https://127.0.0.1:8000/api/items')
            .then((response) => response.json())
            .then((data) => {
                setTodos(data);
            })
            .catch((error) => {
                console.log('Error fetching JSON data: ', error);
            })
    }, []);

    return (
        <div>
            <pre>{JSON.stringify(todos, null, 2)}</pre>
        </div>
    )
}
export default ComponentTodoList;
