import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { GlobalStyles } from "./styles/GlobalStyles"



function App() {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyles />
    </BrowserRouter>
  )
}

export default App
