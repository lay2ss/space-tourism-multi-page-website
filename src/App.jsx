import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { BackgroundProvider } from "./components/BackgroundContext"
import Home from "./pages/Home"
import Destination from "./pages/Destination"
import Crew from "./pages/Crew"
import Technology from "./pages/Technology"
import Nav from "./components/Nav"

const App = ()=> {
  return(
    <BackgroundProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/destination" element={<Destination />}/>
          <Route path="/crew" element={<Crew />}/>
          <Route path="/technology" element={<Technology />}/>
        </Routes>
      </Router>
    </BackgroundProvider>
  )
}
export default App
