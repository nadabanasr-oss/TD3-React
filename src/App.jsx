import "./App.css";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/Header";
import Destinations from "./components/Destinations/Destinations";

function App() {
  return (
    <div className="app">
      <Header />
      <Destinations />
      <Footer />
    </div>
  );
}

export default App;