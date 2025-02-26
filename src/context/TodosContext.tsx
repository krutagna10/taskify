import { createContext } from "react";

interface Todos {
  todos: { id: string, title: string }[],
  onTodoAdd: (title: string) => void,
}

const TodosContext = createContext<Todos>({
  todos: [],
  onTodoAdd: () => {},
});

export default TodosContext;
