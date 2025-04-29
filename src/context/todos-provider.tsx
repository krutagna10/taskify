import { useReducer } from "react";
import TodosContext from "./todos-context";
import { Todo } from "@/types";

type TodosAction = { type: "add-todo"; title: string, description: string };

const InitialTodos: Todo[] = [
  { id: crypto.randomUUID(), title: "Item 1", description: "This is Item 1" },
  { id: crypto.randomUUID(), title: "Item 2", description: "This is Item 1" },
];

function todosReducer(todos: Todo[], action: TodosAction): Todo[] {
  switch (action.type) {
    case "add-todo": {
      const newTodo = { id: crypto.randomUUID(), title: action.title, description: action.description };
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

  console.log(todos);

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
}

export default TodosProvider;
