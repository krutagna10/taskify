import TodosContext from "@/context/todos/todos-context";
import { useContext } from "react";
import TodoItem from "./todo-item";

function TodoList() {
  const { todos, onTodoDelete } = useContext(TodosContext);

  return (
    <div className="w-[min(32rem,100vw)]">
      <ul className="space-y-4">
        {todos.length === 0 ? (
          <p>You don't have any tasks</p>
        ) : (
          todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onTodoDelete={onTodoDelete} />
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoList;
