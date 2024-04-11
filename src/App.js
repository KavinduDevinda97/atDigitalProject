import "./App.css";
import Card from "./Components/DescriptionBox/Card";
import CardRight from "./Components/DescriptionBox/CardRight";
import FAQ from "./Components/FAQ/FAQ";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/Hero";

import NavigationBar from "./Components/NavigationBar/Navbar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HeroSection />
      <div className="d-flex flex-column">
        <div className="row align-items-center justify-content-center">
          <div className="col-7">
          <Card />
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-7">
          <CardRight />
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-7">
            <FAQ />
            </div>
            </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
