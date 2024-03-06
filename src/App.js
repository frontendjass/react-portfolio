import React from "react";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Work from "./components/Work/Work";

function App() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <ReactLenis root>
      <Navbar />
      <Home />
      <Work />
    </ReactLenis>
  );
}

export default App;
