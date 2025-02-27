import { ThemeProvider } from "@/components/theme-provider";
import TodoHeader from "./components/todo-header";
import TodosProvider from "./context/todos-provider";
import TodoList from "./components/todo-list";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TodosProvider>
        <main className="space-y-4">
          <TodoHeader />
          <TodoList />
        </main>
      </TodosProvider>
    </ThemeProvider>
  );
}

export default App;
