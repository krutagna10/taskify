import { useContext } from "react";
import TodosContext from "@/context/todos-context";
import { EllipsisVertical } from "lucide-react";

function TodoList() {
  const { todos } = useContext(TodosContext);

  return (
    <div className="w-[min(32rem,100vw)]">
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            className="flex items-center justify-between bg-zinc-900 p-4"
            key={todo.id}
          >
            <span>{todo.title}</span>
            <EllipsisVertical />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
