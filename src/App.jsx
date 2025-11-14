import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-light mb-4">
          <div className="container">
            <Link className="navbar-brand" to="/">
              STORE
            </Link>

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
