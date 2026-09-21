"use client";

import { useState } from "react";

export default function Home() {
  const [cart, setCart] = useState(0);
  const [tracking, setTracking] = useState("");
  const [message, setMessage] = useState("");

  const addToCart = () => {
    setCart(cart + 1);
    setMessage("Product added to cart!");
  };

  const trackOrder = () => {
    if (!tracking.trim()) {
      setMessage("Please enter your order or tracking number.");
      return;
    }
    setMessage(`Tracking order: ${tracking}`);
  };

  return (
    <main>
      <header className="header">
        <div className="logo">🍴 Jeyas Kitchen</div>

        <nav>
          <a href="/">Home</a>
          <a href="#products">Products</a>
          <a href="#categories">Categories</a>
          <a href="#track">Track Order</a>
          <a href="/admin">Admin</a>
        </nav>

        <button className="cart">
          🛒 Cart ({cart})
        </button>
      </header>

      <section className="hero">
        <div>
          <p className="tagline">AUTHENTIC HOMEMADE TASTE</p>

          <h1>
            Traditional Taste,
            <br />
            Delivered to Your Door
          </h1>

          <p className="heroText">
            Premium masalas and healthy drinks,
            <br />
            freshly packed for your family.
          </p>

          <button
            className="shopButton"
            onClick={() =>
              document
                .getElementById("products")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Shop Now →
          </button>
        </div>
      </section>

      <section id="categories" className="categories">
        <h2>Shop by Category</h2>

        <div className="categoryGrid">
          <div className="categoryCard">
            <div className="emoji">🌶️</div>
            <h3>Masalas</h3>
            <p>Authentic spice blends</p>
          </div>

          <div className="categoryCard">
            <div className="emoji">🥤</div>
            <h3>Health Drinks</h3>
            <p>Healthy everyday nutrition</p>
          </div>
        </div>
      </section>

      <section id="products" className="products">
        <h2>Featured Products</h2>

        <div className="productGrid">
          <div className="productCard">
            <div className="productImage">🌶️</div>
            <h3>Premium Masala</h3>
            <p>Authentic homemade taste</p>
            <strong>₹199</strong>
            <br />
            <button onClick={addToCart}>Add to Cart</button>
          </div>

          <div className="productCard">
            <div className="productImage">🥤</div>
            <h3>Health Drink Powder</h3>
            <p>Nutritious and delicious</p>
            <strong>₹249</strong>
            <br />
            <button onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
      </section>

      <section id="track" className="trackSection">
        <h2>Track Your Order</h2>

        <p>Enter your order or tracking number</p>

        <div className="trackBox">
          <input
            type="text"
            value={tracking}
            onChange={(e) => setTracking(e.target.value)}
            placeholder="Order / Tracking Number"
          />

          <button onClick={trackOrder}>Track Order</button>
        </div>

        {message && <p>{message}</p>}
      </section>

      <footer>
        <p>© 2026 Jeyas Kitchen. All rights reserved.</p>
      </footer>
    </main>
  );
    }
