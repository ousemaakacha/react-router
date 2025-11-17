import axios from "axios";
import { useState, useEffect } from "react";
import { data, useParams } from "react-router-dom";

export default function ProductDetail() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  function getProdDet() {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res);
        setProduct(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(getProdDet, []);

  return (
    <>
      <div className="container m-5">
        <div className="row">
          <div className="col-6">
            <img src={product.image} className="image-fluid" />
          </div>

          <div className="col-6">
            <h1>{product.title}</h1>
            <h3 className="text-success">{product.price} €</h3>
            <p className="mt-3">{product.description}</p>
            <p className="text-uppercase">
              <strong>CATEGORY: </strong>
              {product.category}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
