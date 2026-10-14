
import { useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Mobile Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 1500 },
  ]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  function addProduct() {
    if (name.trim() === "" || price === "") {
      alert("Please enter product name and price");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: name,
      price: Number(price),
    };

    setProducts([...products, newProduct]);

    setName("");
    setPrice("");
  }

  function deleteProduct(id) {
    setProducts(products.filter((product) => product.id !== id));
  }
  return (
    <div>
      <h1>Product Management</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <h2>Add Product</h2>
      <input
        type="text"
        placeholder="Product name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="number"
        placeholder="Product price"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <button onClick={addProduct}>Add Product</button>

      <h2>Product List</h2>

      {products
      .filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
      .map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <button onClick={() => setSelectedProduct(product)}>
            View Details
          </button>
          <button onClick={() => deleteProduct(product.id)}>
            Delete
          </button>
        </div>
      ))}
    
      {selectedProduct && (
        <div>
          <h2>Product Details</h2>
          <p>ID: {selectedProduct.id}</p>
          <p>Name: {selectedProduct.name}</p>
          <p>Price: ₹{selectedProduct.price}</p>

          <button onClick={() => setSelectedProduct(null)}>
            Close Details
          </button>
        </div>
      )}

    </div>
  );
}

export default App;
