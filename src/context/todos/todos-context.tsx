import { createContext } from "react";
import { Todo } from "@/types/todo";

interface TodosState {
  todos: Todo[];
  onTodoAdd: (newTodo: Todo) => void;
  onTodoEdit: (editedTodo: Todo) => void;
  onTodoDelete: (deleteId: string) => void;
}

const TodosContext = createContext<TodosState>({} as TodosState);

export default TodosContext;
