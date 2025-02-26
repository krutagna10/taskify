import { useReducer } from "react";
import TodosContext from "./TodosContext";

interface Todo {
  id: string;
  title: string;
}

type TodosAction = { type: "add-todo"; title: string };

const InitialTodos: Todo[] = [
  { id: crypto.randomUUID(), title: "Item 1" },
  { id: crypto.randomUUID(), title: "Item 2" },
];

function todosReducer(todos: Todo[], action: TodosAction): Todo[] {
  switch (action.type) {
    case "add-todo": {
      const newTodo = { id: crypto.randomUUID(), title: action.title };
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

  function handleTodoAdd(title: string) {
    dispatch({ type: "add-todo", title });
  }

  const value = {
    todos: todos,
    onTodoAdd: handleTodoAdd,
  };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
}

export default TodosProvider;
