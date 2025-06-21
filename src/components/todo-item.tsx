import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Eye, Trash2, SquarePen } from "lucide-react";
import { Todo } from "@/types";

const formSchema = z.object({
  title: z.string().min(1, { message: "Title cannot be empty" }),
  description: z.string(),
});

interface TodoItemProps {
  todo: Todo;
  onTodoDelete: (deleteId: string) => void;
}

function TodoItem({ todo, onTodoDelete }: TodoItemProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: todo.title,
      description: todo.description,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <li
      className="flex items-center justify-between bg-zinc-900 p-4"
      key={todo.id}
    >
      <span>{todo.title}</span>
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
        <Dialog>
          <DialogTrigger>
            <SquarePen size={18} />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit your todo</DialogTitle>
              <DialogDescription>Your changes will be final</DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form
                className="space-y-4"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Task Name" {...field} />
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
                <Button>Edit Todo</Button>
              </form>
            </Form>
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
