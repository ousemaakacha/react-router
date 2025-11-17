import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const endProd = "https://fakestoreapi.com/products";
  function getProd() {
    axios
      .get(endProd)
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(getProd, []);
  return (
    <>
      <div className="container">
        <h1 className="mb-4">Products</h1>

        <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100">
                <img
                  src={product.image}
                  className="card-img-top p-3"
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.slice(0, 40)}...
                  </h5>
                  <p className="card-text fw-bold">{product.price} €</p>
                </div>
                <div className="card-footer text-center">
                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-primary w-100"
                  >
                    About the product
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
