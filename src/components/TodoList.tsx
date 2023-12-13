import { Task } from "./Task"

type Props = {
    todoList: string[]
    deleteTask: (index:number) => void
}

export const TodoList = ({todoList, deleteTask}: Props) => {
  return (
    <div className="taskList">
        {
            todoList.map((task, index) => {
            return(
                <Task key={index} task={task} deleteTask={() => deleteTask(index)}></Task>
            )
            })
        }
    </div>
  )
}