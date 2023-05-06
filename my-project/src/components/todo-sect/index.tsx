'use client';

import { useState } from "react";
import ToDoList from "../todo/ToDoList";

type ToDo = {
    todo: string;
    active: boolean;
    id: number;
}

const TodoSect = () => {
    const [todos, setTodos] = useState<ToDo[]>([]);
    const [newTodo, setNewTodo] = useState('');

    function changeTodo(type:string, id: number, str: string) {
        setTodos((prev) => {
            const temp = [...prev];
            if(type === 'delete'){
                temp.splice(temp.findIndex((el) => el.id === id), 1);
            } else if (type === 'update') {
                temp.splice(temp.findIndex((el) => el.id === id), 1, {
                    todo: str,
                    active: true,
                    id: todos.length
                });

            } else if (type === 'undo') {
                let tempToDo = temp[temp.findIndex((el) => el.id === id)];
                temp.splice(temp.findIndex((el) => el.id === id), 1, {
                    todo: tempToDo.todo,
                    active: true,
                    id: todos.length
                });
            } else if (type === 'complete') {
                let tempToDo = temp[temp.findIndex((el) => el.id === id)];
                temp.splice(temp.findIndex((el) => el.id === id), 1, {
                    todo: tempToDo.todo,
                    active: false,
                    id: todos.length
                });

            }

            return temp;
        })
    }

    return <div
            className='w-full p-8 flex flex-col items-center'
        >
        <span
            className='w-full text-left font-bold text-2xl'
        >
            Example TodoApp
        </span>
        <div
            className='w-full flex flex-row items-center justify-center'
        >
            <span
                className='font-bold text-xl pr-1'
            >
                Enter todo:
            </span>
            <input
                type='text'
                value={newTodo}
                onChange={e => setNewTodo(e.target.value)}
                className='border-none rounded w-1/3 h-8 px-2'
            />
            <button
                onClick={() => {
                    if(newTodo === ''){
                        return;
                    } else {
                        setTodos((prev) => {
                            const temp = [...prev];
                            temp.unshift(
                                {
                                    todo: newTodo,
                                    active: true,
                                    id: prev.length
                                }
                            );
                            return temp;
                        });
                    }
                    setNewTodo('');
                }}
                className='bg-black text-white px-2 py-1 font-bold rounded ml-2'
            >Create</button>
        </div>
        {
            todos.filter((el) => el.active).length > 0 && 
            <div
                className='w-full flex flex-col items-center mt-4'
            >
                <span 
                    className='w-full text-left pl-2 font-semibold text-lg'
                >
                    Existing ToDos
                </span>
                <ToDoList 
                    todos={todos.filter((el) => el.active)}
                    callback={changeTodo}
                />
            </div>
        }
        {
            todos.filter((el) => !el.active).length > 0 && 
            <div
                className='w-full flex flex-col items-center'
                style={{
                    marginTop: todos.some(el => el.active) ? 28 : 0
                }}
            >
                <span 
                    className='w-full text-left pl-2 font-semibold text-lg'
                >
                    Completed ToDos
                </span>
                <ToDoList 
                    todos={todos.filter((el) => !el.active)}
                    callback={changeTodo}
                />
            </div>
        }
    </div>
}

export default TodoSect;