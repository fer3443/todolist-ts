import { useState } from "react";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
    const [newTask, setNewTask] = useState<string>('')
    const [todoList, setTodoList] = useState<string[]>([])

    const handleAddTask = () => {
        if(newTask.trim() === "") return
        setTodoList( previousTask => [...previousTask, newTask])
        setNewTask('')
    }

    const handleDeleteTask = (index: number) => {
        setTodoList(tareas => tareas.filter((_, i) => i !== index))
    }
  return (
    <section>
      <h1>Lista de Tareas</h1>
      <div className="flex">
        <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="Nueva Tarea" />
      <button onClick={handleAddTask}>agregar tarea</button>
      </div>
      <TodoList todoList={todoList} deleteTask={handleDeleteTask}/>
    </section>
  );
};
