import products from './productsData';
import './ProductList.css';

function ProductList() {
    return (
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
          </div>
        ))}
      </div>
    );
  }
  
  
  export default ProductList;