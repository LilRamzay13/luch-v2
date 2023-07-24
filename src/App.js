import "./styles/style.css"


import Navbar from "./components/navbar/Navbar";
import BasicAccordion from "./components/accordion/Accordion";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">

      <div className="vertical-container">
        <Navbar />

        <div className="main__content">



          <div className="content">
            <BasicAccordion />

          </div >



        </div >
        <Footer />
      </div>
    </div >
  );
}

export default App;
