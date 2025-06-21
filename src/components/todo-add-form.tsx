import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { Button } from "./ui/button";
import { useContext } from "react";
import TodosContext from "@/context/todos/todos-context";

const formSchema = z.object({
  title: z.string().min(1, { message: "Title cannot be empty" }),
  description: z.string(),
});

interface TodoAddFormProps {
  onDialogClose: () => void;
}

function TodoAddForm({ onDialogClose }: TodoAddFormProps) {
  const { onTodoAdd } = useContext(TodosContext);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    onDialogClose();
    onTodoAdd(values.title, values.description);
  }

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
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
              <FormDescription>This is your todo description</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="cursor-pointer items-center self-end bg-green-700 text-white hover:bg-green-800">
          Add Todo
        </Button>
      </form>
    </Form>
  );
}

export default TodoAddForm;
