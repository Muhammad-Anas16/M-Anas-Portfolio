import "./App.css";
import { Button } from "./components/ui/button";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[linear-gradient(90deg,_rgba(18,29,30,1)_0%,_rgba(0,0,0,1)_50%,_rgba(23,18,27,1)_100%)] text-white">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
