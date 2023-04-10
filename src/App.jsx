/* import styles from './App.module.css'; */
import Products from './data/Products'
import ProductList from './components/ProductList'
import CarrList from './components/CartList';
import Summary from './components/Summary';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const updateTotalProducts = (cant) => {
    setTotalProducts(totalProducts + cant)
  }

  const updateTotalPrice = (cant) => {
    setTotalPrice(totalPrice + cant)
  }

  return (
    <div className='container' style={{ marginTop: '20px' }}>
      <Header
        totalProducts={totalProducts}
      />
      <ProductList
        products={Products}
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
        updateTotalProducts={updateTotalProducts}
        updateTotalPrice={updateTotalPrice}
      />
      <hr />
      <div className="row">
        <div className="col-7">
          <CarrList
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
            updateTotalProducts={updateTotalProducts}
            updateTotalPrice={updateTotalPrice}
          />
        </div>
        <div className="col-5">
          <Summary
            totalPrice={totalPrice}
            updateTotalPrice={updateTotalPrice}
          />
        </div>
      </div>
    </div>
  )
}

export default App
