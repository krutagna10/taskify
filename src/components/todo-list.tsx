import { useContext, useState } from "react";
import TodosContext from "@/context/todos/todos-context";
import { Container } from "@/components/ui/container";
import TodoItem from "@/components/todo-item";
import TodoForm from "@/components/todo-form";
import { Button } from "@/components/ui/button";

const FILTERS = ["all", "active", "completed"];

function TodoList() {
  const { todos, onTodoAdd } = useContext(TodosContext);
  const [filter, setFilter] = useState(FILTERS[0]);

  const handleTodoFormSubmit = (title: string, description: string): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      isCompleted: false,
      title,
      description,
    };
    onTodoAdd(newTodo);
  };

  return (
    <section className="mt-8">
      <Container className="w-[min(36rem,100vw)] space-y-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl">Todos</h2>
          <TodoForm
            task="Add"
            values={{ title: "", description: "" }}
            onTodoFormSubmit={handleTodoFormSubmit}
          >
            <Button>Add Todo</Button>
          </TodoForm>
        </div>
        <div>
          <ul className="space-y-4">
            {todos.length === 0 ? (
              <p>You don't have any tasks</p>
            ) : (
              todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            )}
          </ul>
        </div>
        <div className="flex items-center justify-center gap-6 bg-zinc-900 p-2">
          {FILTERS.map((filter) => (
            <div key={filter}>
              <label className="text-gray-400 has-checked:text-white">
                <input className="hidden" name="filter" type="radio" />
                {filter}
              </label>
            </div>
          ))}
          <input type="checkbox" />
        </div>
      </Container>
    </section>
  );
}

export default TodoList;
