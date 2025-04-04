import { createContext } from "react";
import { Todo } from "@/types";

interface Todos {
  todos: Todo[];
  onTodoAdd: (title: string, description: string) => void;
}

const TodosContext = createContext<Todos>({
  todos: [],
  onTodoAdd: () => {},
});

export default TodosContext;
