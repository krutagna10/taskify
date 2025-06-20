import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical, Trash2, SquarePen } from "lucide-react";
import { Todo } from "@/types";

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  return (
    <li
      className="flex items-center justify-between bg-zinc-900 p-4"
      key={todo.id}
    >
      <span>{todo.title}</span>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <button>
            <EllipsisVertical />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="flex justify-between">
            <span>Edit</span>
            <SquarePen />
          </DropdownMenuItem>
          <DropdownMenuItem className="flex justify-between">
            <span className="text-red-400">Delete</span>
            <Trash2 className="text-red-400" />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </li>
  );
}

export default TodoItem;
