import { useState } from "react"
import About from "./components/About"
import Arrivals from "./components/Arrivals"
import Collections from "./components/Collections"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Loader from "./components/Loader"
import Navbar from "./components/Navbar"
import ParallaxText from "./components/ParallaxText"

function App() {
  const [isScrollbarVisible, setIsScrollbarVisible] = useState(false)
  return (
    <main>
      {!isScrollbarVisible && (
        <Loader
          isScrollbarVisible={isScrollbarVisible}
          setIsScrollbarVisible={setIsScrollbarVisible}
        />
      )}
      <Navbar />
      <Hero />
      <About />
      <Collections />
      <section className="relative mx-auto max-w-7xl px-4 pt-12 pb-4">
        <ParallaxText baseVelocity={1}>
          FASHION IS AN ARMOUR TO SURVIVE EVERYDAY LIFE
        </ParallaxText>
        <ParallaxText baseVelocity={-1}>
          OVER-DRESSED OR UNDER-DRESSED WITH A LITTLE BLACK DRESS
        </ParallaxText>
      </section>
      <Arrivals />
      <Footer />
    </main>
  )
}

export default App
