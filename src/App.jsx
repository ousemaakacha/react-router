import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        {/* <Routes> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/products" element={<Products />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* </Routes> */}
      </BrowserRouter>
    </>
  );
}

export default App;
