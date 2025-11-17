import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  return <></>;
}
