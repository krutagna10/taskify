import { createContext } from "react";
import { Todo } from "@/types";

interface TodosState {
  todos: Todo[];
  onTodoAdd: (title: string, description: string) => void;
  onTodoDelete: (deleteId: string) => void;
}

const TodosContext = createContext<TodosState>({} as TodosState);

export default TodosContext;
