import { Link } from 'react-router-dom';
import './Home.css';

const products = [
  { 
    id: 1, 
    name: 'Notebook Dell', 
    price: 3499.90,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400',
    description: 'Notebook Dell Inspiron com processador Intel Core i5, 8GB RAM e 256GB SSD'
  },
  { 
    id: 2, 
    name: 'Mouse Gamer', 
    price: 159.90,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400',
    description: 'Mouse gamer RGB com 7 botões programáveis e DPI ajustável'
  },
  { 
    id: 3, 
    name: 'Teclado Mecânico', 
    price: 349.90,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400',
    description: 'Teclado mecânico RGB com switches blue e estrutura de alumínio'
  },
  { 
    id: 4, 
    name: 'Monitor 24"', 
    price: 899.90,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400',
    description: 'Monitor LED 24 polegadas Full HD com taxa de atualização de 75Hz'
  },
  { 
    id: 5, 
    name: 'Headset Gamer', 
    price: 279.90,
    image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=400',
    description: 'Headset gamer surround 7.1 com microfone removível e LED RGB'
  },
  { 
    id: 6, 
    name: 'Webcam Full HD', 
    price: 189.90,
    image: 'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=400',
    description: 'Webcam Full HD 1080p com microfone integrado e correção de luz'
  }
];

// eslint-disable-next-line react-refresh/only-export-components
export { products };

function Home() {
  return (
    <div className="home">
      <h2>Produtos Disponíveis</h2>
      <div className="products-grid">
        {products.map(product => (
          <Link 
            to={`/product/${product.id}`} 
            key={product.id}
            className="product-card"
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">R$ {product.price.toFixed(2)}</p>
            <button className="btn-details">Ver Detalhes</button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;