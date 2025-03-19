import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  title: z.string().min(1, { message: "Title cannot be empty" }),
  description: z.string(),
});

function TodoHeader() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsDialogOpen(false)
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
          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Task 1" {...field} />
                    </FormControl>
                    <FormDescription>This is your todo title</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} placeholder="Task Description" />
                    </FormControl>
                    <FormDescription>
                      This is your todo description
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="cursor-pointer items-center self-end bg-green-700 text-white hover:bg-green-800">
                Add Todo
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default TodoHeader;
