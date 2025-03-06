import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";


type FormInputs = {
  title: string;
  description: string;
};

function TodoHeader() {
  const { register, handleSubmit } = useForm<FormInputs>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

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
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Label htmlFor="title">Title</Label>
            <Input
              {...register("title")}
              type="text"
              placeholder="Enter title"
            />
            <Textarea
              {...register("description")}
              placeholder="Enter description"
            />
            <Button className="cursor-pointer items-center self-end bg-green-700 text-white hover:bg-green-800">
              Add Todo
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default TodoHeader;
