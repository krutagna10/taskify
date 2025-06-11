type Theme = "dark" | "light" | "system";

interface Todo {
  id: string;
  title: string;
  description: string;
}

export type { Theme, Todo };