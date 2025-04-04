import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import TodoAddForm from "./todo-add-form";


function TodoHeader() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  }

  return (
    <div className="flex items-center justify-between gap-4">
      <h1 className="text-3xl">Taskify</h1>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button className="cursor-pointer items-center bg-green-700 text-white hover:bg-green-800">
            Add Todo
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add new Task</DialogTitle>
            <DialogDescription>
              Please enter the title and description of task you want to add
            </DialogDescription>
          </DialogHeader>
          <TodoAddForm onDialogClose={handleDialogClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default TodoHeader;
