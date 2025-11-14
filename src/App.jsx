import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <nav className="">
        <div className="">
          <span>MyStore</span>
          <button>
            <span></span>
          </button>
          <div>
            <ul>
              <li>
                <span>Home</span>
              </li>

              <li>
                <span>About Us</span>
              </li>

              <li>
                <span>Products</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
