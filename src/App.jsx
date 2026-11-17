import { useState, useEffect } from "react";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import { Routes, Route, Link, Navigate, useParams } from "react-router-dom";

function Home({
  isLoggedIn,
  setIsLoggedIn,
  products,
  setProducts,
  loading,
  error
}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editingProductId, setEditingProductId] = useState(null);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(2);
  const [successMessage, setSuccessMessage] = useState("");

  async function handleLogout() {
    const token = localStorage.getItem("access_token");

    try {
      if (token) {
        await fetch("http://127.0.0.1:8000/logout", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      localStorage.removeItem("access_token");
      setIsLoggedIn(false);
      alert("Logged out successfully!");
    }
  }
  
  async function addProduct() {
    // Step 1: Validate product name
    if (!name.trim()) {
      setError("Product name is required.");
      return;
    }

    // Step 2: Validate product price
    if (
      price === "" ||
      !Number.isFinite(Number(price)) ||
      Number(price) <= 0
    ) {
      setError("Price must be a valid number greater than 0.");
      return;
    }

    setError("");
    setSuccessMessage("");

    // Step 3: Prepare product data
    const productData = {
      name: name.trim(),
      price: Number(price),
    };

    try {
      let response;

      // Step 4: Update or add product
      if (editingProductId !== null) {
        response = await fetch(
          `http://127.0.0.1:8000/products/${editingProductId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(productData),
          }
        );
      } else {
        response = await fetch("http://127.0.0.1:8000/products/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        });
      }

      // Step 5: Check API response
      if (!response.ok) {
        throw new Error("Product operation failed");
      }

      const savedProduct = await response.json();

      // Step 6: Update frontend state
      if (editingProductId !== null) {
        setProducts(
          products.map((product) =>
            product.id === editingProductId ? savedProduct : product
          )
        );

        setSuccessMessage("Product updated successfully!");
      } else {
        setProducts([...products, savedProduct]);

        setSuccessMessage("Product added successfully!");
      }

      // Step 7: Clear form
      setName("");
      setPrice("");
      setEditingProductId(null);

    } catch (error) {
      console.error("Error saving product:", error);
      setError("Unable to save product. Please try again.");
    }
  }

  async function handleSearch(value) {
    setSearch(value);

    try {
      let url = "http://127.0.0.1:8000/products/";

      if (value.trim() !== "") {
        url += `search/?name=${encodeURIComponent(value)}`;
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Search failed");
      }

      const data = await response.json();
      setProducts(data);

    } catch (error) {
      console.error("Search error:", error);
    }
  }
  async function handleFilter() {
    if (minPrice === "" || maxPrice === "") {
      alert("Please enter both minimum and maximum prices");
      return;
    }

    if (Number(minPrice) > Number(maxPrice)) {
      alert("Minimum price cannot exceed maximum price");
      return;
    }

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/products/filter/?min_price=${minPrice}&max_price=${maxPrice}`
      );

      if (!response.ok) {
        throw new Error("Filter failed");
      }

      const data = await response.json();
      setProducts(data);

    } catch (error) {
      console.error("Filter error:", error);
      alert("Unable to filter products");
    }
  }

  async function handlePagination(page) {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/products/page/?page=${page}&limit=${limit}`
      );

      if (!response.ok) {
        throw new Error("Pagination failed");
      }

      const data = await response.json();

      setProducts(data);
      setCurrentPage(page);

    } catch (error) {
      console.error("Pagination error:", error);
      alert("Unable to load products");
    }
  }

  async function deleteProduct(id) {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/products/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      setProducts(products.filter((product) => product.id !== id));

      setSuccessMessage("Product deleted successfully!");
    } catch (error) {
      console.error(error);
      alert("Error deleting product");
    }
  }

  return (
    <div>
      {loading && <h2>Loading products...</h2>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && (
        <p style={{ color: "green" }}>{successMessage}</p>
      )}
      <h2>
        {isLoggedIn ? "Welcome! You are logged in." : "Please Login"}
      </h2>
      {isLoggedIn && (
        <button onClick={handleLogout}>
          Logout
        </button>
      )}

      <h1>Product Management</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(event) => handleSearch(event.target.value)}
      />
      <h2>Filter Products by Price</h2>
      <input
        type="number"
        placeholder="Minimum price"
        value={minPrice}
        onChange={(event) => setMinPrice(event.target.value)}
      />
      <input
        type="number"
        placeholder="Maximum price"
        value={maxPrice}
        onChange={(event) => setMaxPrice(event.target.value)}
      />
      <button onClick={handleFilter}>
        Apply Filter
      </button>
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
          <button onClick={() => {
            setEditingProductId(product.id);
            setName(product.name);
            setPrice(String(product.price));
          }}>
            Edit
          </button>
          <button onClick={() => deleteProduct(product.id)}>
            Delete
          </button>
        </div>
      ))}
      <div>
        <button
          onClick={() => handlePagination(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span> Page {currentPage} </span>

        <button onClick={() => handlePagination(currentPage + 1)}>
          Next
        </button>
      </div>
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
function ProductDetails({ products }) {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found!</h2>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <p>ID: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Price: ₹{product.price}</p>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h1>My Profile</h1>
      <p>Welcome to your profile page!</p>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("access_token")
  );
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Mobile Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 1500 },
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);

        const response = await fetch(
          "http://127.0.0.1:8000/products/"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);

      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Unable to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/products">Products</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/register">Register</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/profile">Profile</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />

        <Route
          path="/products"
          element={
            <Home
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              products={products}
              setProducts={setProducts}
              loading={loading}
              error={error}
            />
          }
        />

        <Route
          path="/login"
          element={
            <Login onLoginSuccess={() => setIsLoggedIn(true)} />
          }
        />

        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            isLoggedIn ? <Dashboard /> : <Navigate to="/login" />
          }
        />

        <Route
          path="/products/:id"
          element={<ProductDetails products={products} />}
        />

        <Route
          path="/profile"
          element={
            isLoggedIn ? <Profile /> : <Navigate to="/login" />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
