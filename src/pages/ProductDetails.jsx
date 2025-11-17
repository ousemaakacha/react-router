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

  return <></>;
}
