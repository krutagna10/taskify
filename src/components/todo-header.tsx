import { useContext, useState } from "react";
import TodosContext from "@/context/todos/todos-context";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import TodoForm from "@/components/todo-form";

function TodoHeader() {
  const { onTodoAdd } = useContext(TodosContext);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleTodoFormSubmit = (title: string, description: string): void => {
    onTodoAdd(title, description);
    setIsDialogOpen(false);
  };

  return (
    <div className="flex items-center justify-between gap-4">
      <h2 className="text-xl">Todos</h2>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button>Add Todo</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Todo</DialogTitle>
            <DialogDescription>
              Enter the task details below to create a new todo item.
            </DialogDescription>
          </DialogHeader>
          <TodoForm
            task="Add"
            values={{ title: "", description: "" }}
            onTodoFormSubmit={handleTodoFormSubmit}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default TodoHeader;
