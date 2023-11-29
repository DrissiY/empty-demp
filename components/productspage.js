import React, { useEffect, useState } from "react";
import { fetchData } from "../config/data/fetchin"; // Import the fetchData function

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Call the fetchData function when the component mounts
    async function getProducts() {
      try {
        const fetchedProducts = await fetchData();
        setProducts(fetchedProducts); // Set the products in the component state
      } catch (error) {
        console.error("Error fetching products:", error);
        // Handle errors if needed
      }
    }

    getProducts();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
