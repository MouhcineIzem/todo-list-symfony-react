import React from 'react';


const DetailTodoComponent = ({ match, todos}) => {
    const todoId = parseInt(match.params.id);
    const todo = todos.find((item) => item.id === todoId);

    if (!todo) {
        return <div>TODO not found</div>;
    }

    return (
        <div>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
        </div>
    );
}

export default DetailTodoComponent;
