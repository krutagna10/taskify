import TodosContext from "@/context/todos/todos-context";
import { useContext } from "react";
import TodoItem from "./todo-item";

function TodoList() {
  const { todos } = useContext(TodosContext);

  return (
    <div className="w-[min(32rem,100vw)]">
      <ul className="space-y-4">
        {todos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
