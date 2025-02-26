import { ThemeProvider } from "@/components/theme-provider";
import TodoHeader from "./components/todo-header";
import TodosProvider from "./context/TodosProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TodosProvider>
        <main>
          <TodoHeader />
        </main>
      </TodosProvider>
    </ThemeProvider>
  );
}

export default App;
