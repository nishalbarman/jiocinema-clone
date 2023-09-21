import Navbar from "./Components/navbar/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import "./App.css";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <AllRoutes />
      </div>
      <Footer />
    </>
  );
}

export default App;
