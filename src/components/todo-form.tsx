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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  title: z.string().min(1, { message: "Title cannot be empty" }),
  description: z.string(),
});

interface TodoFormProps {
  task: string;
  values: { title: string; description: string };
  onTodoFormSubmit: (title: string, description: string) => void;
}

function TodoForm({ task, values, onTodoFormSubmit }: TodoFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: values.title,
      description: values.description,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    onTodoFormSubmit(values.title, values.description);
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
        <Button>{task} Todo</Button>
      </form>
    </Form>
  );
}

export default TodoForm;
