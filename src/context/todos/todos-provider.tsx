import { useReducer } from "react";
import TodosProviderContext from "./todos-context";
import { Todo } from "@/types";

const InitialTodos: Todo[] = [
  {
    id: crypto.randomUUID(),
    title: "Item 1",
    description: "Item 1 Description",
  },
  {
    id: crypto.randomUUID(),
    title: "Item 2",
    description: "Item 2 Description",
  },
];

type TodosAction =
  | { type: "add-todo"; title: string; description: string }
  | { type: "delete-todo"; deleteId: string };

function todosReducer(todos: Todo[], action: TodosAction): Todo[] {
  switch (action.type) {
    case "add-todo": {
      const newTodo = {
        id: crypto.randomUUID(),
        title: action.title,
        description: action.description,
      };
      return [...todos, newTodo];
    }

    case "delete-todo": {
      return todos.filter((todo) => todo.id !== action.deleteId);
    }

    default:
      throw new Error("Unknown action");
  }
}

interface TodosProviderProps {
  children: React.ReactNode;
}

function TodosProvider({ children }: TodosProviderProps) {
  const [todos, dispatch] = useReducer(todosReducer, InitialTodos);

  const handleTodoAdd = (title: string, description: string) => {
    dispatch({ type: "add-todo", title, description });
  };

  const handleTodoDelete = (deleteId: string): void => {
    dispatch({ type: "delete-todo", deleteId });
  };

  const value = {
    todos: todos,
    onTodoAdd: handleTodoAdd,
    onTodoDelete: handleTodoDelete,
  };

  return (
    <TodosProviderContext.Provider value={value}>
      {children}
    </TodosProviderContext.Provider>
  );
}

export default TodosProvider;
