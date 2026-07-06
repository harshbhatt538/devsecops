import { Search, ShoppingCart, Star, Truck, ShieldCheck, RotateCcw, ArrowRight } from 'lucide-react';
import { featuredProducts, categories, deals } from './data/products';

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">ShopVista</div>
        <div className="search-box">
          <Search size={18} />
          <input placeholder="Search for products, brands and more" />
        </div>
        <nav className="nav-actions">
          <a href="#">Sign In</a>
          <a href="#">More</a>
          <a href="#" className="cart-link">
            <ShoppingCart size={18} /> Cart (2)
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">New season arrivals</p>
            <h1>Shop the latest trends at unbeatable prices.</h1>
            <p>From premium gadgets to everyday essentials, discover curated deals that feel like your favorite marketplaces.</p>
            <button>Explore Deals <ArrowRight size={18} /></button>
          </div>
          <div className="hero-card">
            <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80" alt="Shopping experience" />
          </div>
        </section>

        <section className="benefits">
          <div><Truck size={20} /> Fast delivery</div>
          <div><ShieldCheck size={20} /> Secure payments</div>
          <div><RotateCcw size={20} /> Easy returns</div>
        </section>

        <section className="section-block">
          <div className="section-title-row">
            <h2>Popular Categories</h2>
            <a href="#">View all</a>
          </div>
          <div className="categories-grid">
            {categories.map((category) => (
              <div key={category.name} className="category-card">
                <img src={category.image} alt={category.name} />
                <p>{category.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-block">
          <div className="section-title-row">
            <h2>Featured Products</h2>
            <a href="#">See more</a>
          </div>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <article key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-meta">
                    <span className="price">${product.price}</span>
                    <span className="rating"><Star size={14} fill="gold" color="gold" /> {product.rating}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block deals-section">
          <div className="section-title-row">
            <h2>Deals of the Day</h2>
            <a href="#">Explore</a>
          </div>
          <div className="deals-list">
            {deals.map((deal) => (
              <div key={deal.title} className="deal-card">
                <h3>{deal.title}</h3>
                <p>{deal.description}</p>
                <span>{deal.badge}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
