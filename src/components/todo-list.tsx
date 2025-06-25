import { useContext } from "react";
import TodosContext from "@/context/todos/todos-context";
import { Container } from "@/components/ui/container";
import TodoHeader from "@/components/todo-header";
import TodoItem from "@/components/todo-item";

function TodoList() {
  const { todos } = useContext(TodosContext);

  return (
    <section className="mt-8">
      <Container className="w-[min(36rem,100vw)] space-y-4">
        <TodoHeader />
        <div>
          <ul className="space-y-4">
            {todos.length === 0 ? (
              <p>You don't have any tasks</p>
            ) : (
              todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            )}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default TodoList;
