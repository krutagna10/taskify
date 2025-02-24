import { ThemeProvider } from "@/components/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main>
        <h1>Taskify</h1>
      </main>
    </ThemeProvider>
  )
}

export default App
