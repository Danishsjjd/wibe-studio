import About from "./components/About";
import Arrivals from "./components/Arrivals";
import Collections from "./components/Collections";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ParallaxText from "./components/ParallaxText";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Collections />
      <div className="relative py-12">
        <ParallaxText baseVelocity={1}>
          FASHION IS AN ARMOUR TO SURVIVE EVERYDAY LIFE
        </ParallaxText>
        <ParallaxText baseVelocity={-1}>
          OVER-DRESSED OR UNDER-DRESSED WITH A LITTLE BLACK DRESS
        </ParallaxText>
      </div>
      <Arrivals />
    </main>
  );
}

export default App;
