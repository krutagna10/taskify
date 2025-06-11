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

type TodosAction = { type: "add-todo"; title: string; description: string };

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
    default:
      throw new Error("Unknown action");
  }
}

interface TodosProviderProps {
  children: React.ReactNode;
}

function TodosProvider({ children }: TodosProviderProps) {
  const [todos, dispatch] = useReducer(todosReducer, InitialTodos);

  function handleTodoAdd(title: string, description: string) {
    dispatch({ type: "add-todo", title, description });
  }

  const value = {
    todos: todos,
    onTodoAdd: handleTodoAdd,
  };

  return (
    <TodosProviderContext.Provider value={value}>
      {children}
    </TodosProviderContext.Provider>
  );
}

export default TodosProvider;
