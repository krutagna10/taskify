import { Todo } from "@/types/todo";

const initialTodos: Todo[] = [
  {
    id: crypto.randomUUID(),
    isCompleted: false,
    title: "Item 1",
    description: "Item 1 Description",
  },
  {
    id: crypto.randomUUID(),
    isCompleted: false,
    title: "Item 2",
    description: "Item 2 Description",
  },
];

export { initialTodos };
