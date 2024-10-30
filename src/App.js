// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import ContadorHooks from "./components/ContadorHooks";
import { ThemeProvider, useTheme } from './components/ThemeContext';
import CounterRedux from "./components/redux/CounterRedux";
import BotonTesting from "./components/BotonTesting"

function App() {
  return (
    <ThemeProvider>
      <ThemeWrapper />
    </ThemeProvider>
  );
}

const ThemeWrapper = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <>
      {/* Background Layer */}
      <div className={`absolute inset-0 -z-10 h-full w-full ${isDarkTheme ? "bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" : "bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"}`}></div>

      {/* Main Layout */}
      <div className="min-h-screen flex flex-col">
        <BrowserRouter>
          <NavBar toggleTheme={toggleTheme} /> {/* Pass toggleTheme to NavBar if needed */}
          <main className="relative isolate px-6 pt-14 lg:px-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/hooks-counter" element={<ContadorHooks />} />
              <Route path="/redux-counter" element={<CounterRedux />} />
              <Route path="/theme" element={""} />
              <Route path="/test-button" element={<BotonTesting />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
