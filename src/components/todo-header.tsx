import { useContext, useState } from "react";
import TodosContext from "@/context/todos-context";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";
import { DialogClose } from "@radix-ui/react-dialog";
import { Textarea } from "./ui/textarea";

function TodoHeader() {
  const { onTodoAdd } = useContext(TodosContext);
  const [title, setTitle] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onTodoAdd(title);
    setIsDialogOpen(false);
  }

  return (
    <div className="flex items-center justify-between gap-4">
      <h1 className="text-3xl">Taskify</h1>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button className="flex cursor-pointer items-center bg-green-700 text-white hover:bg-green-800">
            Add Todo
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add new Task</DialogTitle>
          </DialogHeader>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              onChange={handleTitleChange}
              type="text"
              placeholder="Enter title"
              required
            />
            <Textarea placeholder="Enter Description" />
            <Button className="self-end">Add Todo</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default TodoHeader;
