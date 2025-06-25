import ThemeProvider from "@/context/theme/theme-provider";
import TodosProvider from "@/context/todos/todos-provider";
import Header from "@/components/header";
import TodoList from "@/components/todo-list";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TodosProvider>
        <Header />
        <main className="space-y-4">
          <TodoList />
        </main>
      </TodosProvider>
    </ThemeProvider>
  );
}

export default App;
