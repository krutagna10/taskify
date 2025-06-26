import { useContext, useState } from "react";
import TodosContext from "@/context/todos/todos-context";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import TodoForm from "@/components/todo-form";
import { Todo } from "@/types/todo";
import { Eye, Trash2, SquarePen } from "lucide-react";

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  const { onTodoDelete, onTodoEdit } = useContext(TodosContext);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleTodoFormSubmit = (title: string, description: string): void => {
    onTodoEdit({ ...todo, title, description });
    setIsDialogOpen(false);
  };

  return (
    <li
      className="flex items-center justify-between bg-gray-100 p-4 dark:bg-zinc-900"
      key={todo.id}
    >
      <div className="flex items-center space-x-4">
        <Checkbox />
        <span>{todo.title}</span>
      </div>
      <div className="space-x-4">
        <Dialog>
          <DialogTrigger>
            <Eye size={18} />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{todo.title}</DialogTitle>
              <DialogDescription>{todo.description}</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger>
            <SquarePen size={18} />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit todo</DialogTitle>
              <DialogDescription>
                Modify the task details and save to update your todo.
              </DialogDescription>
            </DialogHeader>
            <TodoForm
              task="Edit"
              values={{ title: todo.title, description: todo.description }}
              onTodoFormSubmit={handleTodoFormSubmit}
            />
          </DialogContent>
        </Dialog>
        <button
          onClick={() => {
            onTodoDelete(todo.id);
          }}
        >
          <Trash2 size={18} />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
