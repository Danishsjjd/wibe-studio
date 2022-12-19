import About from "./components/About";
import Collections from "./components/Collections";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Collections />
      <div className="h-screen w-screen bg-emerald-400"></div>
    </main>
  );
}

export default App;
