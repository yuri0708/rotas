import { useParams, useNavigate } from 'react-router-dom';
import { products } from './Home';
import './ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-details">
        <h2>Produto não encontrado</h2>
        <button onClick={() => navigate('/')} className="btn-back">
          ← Voltar para lista
        </button>
      </div>
    );
  }

  return (
    <div className="product-details">
      <button onClick={() => navigate('/')} className="btn-back">
        ← Voltar
      </button>
      
      <div className="details-content">
        <div className="product-image-large">
          <img src={product.image} alt={product.name} />
        </div>
        
        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="product-description">{product.description}</p>
          
          <div className="price-section">
            <span className="label">Preço:</span>
            <span className="price-large">R$ {product.price.toFixed(2)}</span>
          </div>
          
          <div className="product-features">
            <h3>Características:</h3>
            <ul>
              <li>✓ Garantia de 12 meses</li>
              <li>✓ Frete grátis para todo o Brasil</li>
              <li>✓ Parcelamento em até 12x sem juros</li>
              <li>✓ Nota fiscal inclusa</li>
            </ul>
          </div>
          
          <button className="btn-buy">🛒 Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;