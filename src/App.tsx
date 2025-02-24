import { ThemeProvider } from "@/components/theme-provider";
import TodoHeader from "./components/todo-header";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main>
        <TodoHeader />
      </main>
    </ThemeProvider>
  );
}

export default App;
