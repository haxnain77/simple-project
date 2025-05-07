import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading products...</h2>;

  return (
    <div className="container">
      <h1>Product List</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>{product.description.slice(0, 60)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
