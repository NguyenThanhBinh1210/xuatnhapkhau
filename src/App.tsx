import './App.css'
import { ThemeProvider } from './components/theme-provider'
import useRouteElements from './routes/useRouteElements'

function App() {
  const routeElements = useRouteElements()
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {routeElements}
    </ThemeProvider>
  )
}

export default App
