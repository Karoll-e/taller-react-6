import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

      {/* Main Layout */}
      <div className="min-h-screen flex flex-col">
        <BrowserRouter>
          <NavBar />
          <main className="">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/hooks-counter" element={""} />
              <Route path="/redux-counter" element={""} />
              <Route path="/theme" element={""} />
              <Route path="/test-button" element={""} />
              <Route path="/login" element={""} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
