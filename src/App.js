import ColorBoard from "./components/ColorBoard";
import SimonContextProvider from "./context/SimonContext";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <SimonContextProvider>
      <div className="container" style={{ maxWidth: 600 }}>
        <div className="d-flex flex-column justify-content-center gap-3">
          <Header />
          <ColorBoard />
          <Footer />
        </div>
      </div>
    </SimonContextProvider>
  );
}

export default App;
