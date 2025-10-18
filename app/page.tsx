import ProductCard from '@/components/ProductCard';
import { testProducts } from '@/data/products';

export default function Home() {
  return (
    <div className="app-container">
      <header className="header">
        <div className="header-content">
          <h1 className="logo">Shop2App</h1>
          <nav className="nav">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Products</a>
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link cart-link">Cart (0)</a>
          </nav>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <div className="hero-content">
            <h2 className="hero-title">Welcome to Shop2App</h2>
            <p className="hero-subtitle">Discover amazing products at great prices</p>
          </div>
        </section>

        <section className="products-section">
          <div className="container">
            <h2 className="section-title">Featured Products</h2>
            <div className="products-grid">
              {testProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Shop2App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
