import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HomeCard from "../components/HomeCard";

export default function Home() {
  const { products, loading, error } = useSelector(
    (state) => state.productData
  );
  const [listProducts, setListProducts] = useState();

  useEffect(() => {
    setListProducts(products);
  }, [products]);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Something went wrong!</h3>;

  return (
    <div className="home-container">
      {listProducts &&
        listProducts.map((product) => {
          return <HomeCard key={product.id} product={product} />;
        })}
    </div>
  );
}
