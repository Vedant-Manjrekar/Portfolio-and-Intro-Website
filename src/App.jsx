import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home";
import { ChakraProvider } from "@chakra-ui/react";
import Loader from "./Components/Loader.jsx";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </ChakraProvider>
  );

  // return (
  //   <ChakraProvider>
  //     <div className="App">
  //       <Navbar />
  //       <Home />
  //     </div>
  //   </ChakraProvider>
  // );
  // return <Loader />;
}

export default App;
