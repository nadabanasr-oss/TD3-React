import "./App.css"
import Header from "./components/Header/Header"
import Destinations from "./components/Destinations/Destinations"
import Footer from "./components/Footer/Footer"
import Login from "./components/Login/Login.jsx"
import Apropos from "./components/Apropos/Apropos.jsx"
import Accueil from "./components/Accueil/Accueil.jsx"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>  

          <Route path="/accueil" element={<Accueil />} />
          <Route path="/" element={<Destinations />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/login" element={<Login />} />
      
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;