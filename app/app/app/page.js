export default function Home() {
  return (
    <main>
      <header className="header">
        <div className="logo">Jeyas Kitchen</div>

        <nav>
          <a href="/">Home</a>
          <a href="#products">Products</a>
          <a href="#categories">Categories</a>
          <a href="#track">Track Order</a>
          <a href="/admin">Admin</a>
        </nav>

        <button className="cart">🛒 Cart</button>
      </header>

      <section className="hero">
        <div>
          <p className="tagline">AUTHENTIC • FRESH • NATURAL</p>

          <h1>
            Traditional Taste,
            <br />
            Delivered to Your Door
          </h1>

          <p className="heroText">
            Premium masalas and healthy drink powders,
            freshly packed for your family.
          </p>

          <button className="shopButton">
            Shop Now →
          </button>
        </div>
      </section>

      <section id="categories" className="section">
        <h2>Shop by Category</h2>

        <div className="categoryGrid">
          <div className="categoryCard">
            <div className="emoji">🌶️</div>
            <h3>Masalas</h3>
            <p>Authentic spice blends</p>
          </div>

          <div className="categoryCard">
            <div className="emoji">🥤</div>
            <h3>Health Drink Powders</h3>
            <p>Healthy everyday nutrition</p>
          </div>
        </div>
      </section>

      <section id="products" className="section">
        <h2>Featured Products</h2>

        <div className="productGrid">
          <div className="productCard">
            <div className="productImage">🌶️</div>
            <h3>Premium Masala</h3>
            <p>Authentic homemade taste</p>
            <strong>₹199</strong>
            <button>Add to Cart</button>
          </div>

          <div className="productCard">
            <div className="productImage">🥤</div>
            <h3>Health Drink Powder</h3>
            <p>Nutritious and delicious</p>
            <strong>₹249</strong>
            <button>Add to Cart</button>
          </div>
        </div>
      </section>

      <section id="track" className="trackSection">
        <h2>Track Your Order</h2>
        <p>Enter your order or tracking number</p>

        <div className="trackBox">
          <input
            type="text"
            placeholder="Order / Tracking Number"
          />
          <button>Track Order</button>
        </div>
      </section>

      <footer>
        <p>© 2026 Jeyas Kitchen. All rights reserved.</p>
      </footer>
    </main>
  );
}
