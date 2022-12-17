import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function App() {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <div className="h-screen w-screen bg-red-400">Hello world</div>
        <div className="h-screen w-screen bg-emerald-400">Hello world</div>
        <div className="h-screen w-screen bg-green-400">Hello world</div>
        <div className="h-screen w-screen bg-yellow-400">Hello world</div>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
