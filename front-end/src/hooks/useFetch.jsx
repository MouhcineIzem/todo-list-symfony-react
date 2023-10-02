import {useEffect, useState} from "react";
import axios from "axios";


function useFetch() {
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
    // console.log(todos);

    return [todos, setTodos];
}

export default useFetch;
