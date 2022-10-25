import { useState } from 'react';
import './todos.css';
import Form from './components/Form';
import TodoItem from './components/TodoItem';

const Todos = () => {
    const [todos, setTodos] = useState([
        {
            title: '',
            completed: false,
            id: Math.floor(Math.random() * 100),
        },
    ]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const removeTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id))
    }

    const completeTodo = (id) => {

    }
    
    return (
        <div className='App'>
            <Form addTodo={addTodo} />
            {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} removeTodo={removeTodo} completeTodo={completeTodo} />
            ))}
            {!todos.length && <p>No todos</p>}
        </div>
    );
}

export default Todos;
