import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { Button } from "./components/ui/button";
import Home from "./component/Home";
import About from "./component/About";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <About />
      <Home />
    </>
  );
}

export default App;
