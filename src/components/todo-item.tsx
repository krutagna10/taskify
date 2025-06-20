import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMesage,
} from "@/components/ui/form";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Eye, EllipsisVertical, Trash2, SquarePen } from "lucide-react";
import { Todo } from "@/types";

interface TodoItemProps {
  todo: Todo;
  onTodoDelete: (deleteId: string) => void;
}

function TodoItem({ todo, onTodoDelete }: TodoItemProps) {
  return (
    <li
      className="flex items-center justify-between bg-zinc-900 p-4"
      key={todo.id}
    >
      <span>{todo.title}</span>
      <div className="space-x-4">
        <Dialog>
          <DialogTrigger>
            <Eye />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{todo.title}</DialogTitle>
              <DialogDescription>{todo.description}</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <EllipsisVertical />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="flex w-full justify-between p-2">
                    <span className="text-sm">Edit</span>
                    <SquarePen size={16} />
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Todo</DialogTitle>
                    <DialogDescription>
                      Make changes to your todo here. Click save when you're
                      done.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <button
                className="flex w-full justify-between p-2"
                onClick={() => {
                  onTodoDelete(todo.id);
                }}
              >
                <span className="text-red-400">Delete</span>
                <Trash2 className="text-red-400" size={18} />
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </li>
  );
}

export default TodoItem;
