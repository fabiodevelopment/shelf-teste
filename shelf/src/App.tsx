import React, { useEffect, useState } from 'react';
import api from './services/api';
import Product from './components/Product';


interface IProduct {
  productId: string
  productName: string;
  imageUrl: string;
  oldPrice: number;
  price: number;
  installmentsQuantity: number;
  installmentsValue: number;
}

function App() {

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get<IProduct[]>('/products').then(response =>{
      setProducts(response.data);
    })
  }, []);


  return (
    <div className="App">
      <section>
        <div className="container">
          <div className="shelf">
            { products.map(product => <Product key={product.productId} product={product} /> ) }
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
