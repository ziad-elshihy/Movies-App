import Home from "./Home"
import NavBar from "./NavBar/NavBar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Watchlist from './Watchlist';
import Watched from "./Watched";
import Search from "./Search";
function App() {

   return (
         <Router>
            <NavBar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/watchlist" element={<Watchlist />} />
               <Route path="/watched" element={<Watched />} />
               <Route path="/search" element={<Search />} />
            </Routes>
         </Router>
   )
}

export default App
