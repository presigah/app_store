/* import styles from './App.module.css'; */
import Products from './data/Products'
import ProductList from './components/ProductList'
import CarrList from './components/CartList';
import Summary from './components/Summary';
import { useState } from 'react';

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const updateTotalProducts = (cant) =>{
    setTotalProducts(totalProducts + cant)
  }

  const updateTotalPrice = (cant) =>{
    setTotalPrice(totalPrice + cant)
  }

  return (
    <div>
      <h1>TotalProductos: {totalProducts}</h1>
      <ProductList
        products={Products}
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
        updateTotalProducts={updateTotalProducts}
        updateTotalPrice={updateTotalPrice}
      />
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <CarrList 
        cartProducts = {cartProducts}
        setCartProducts={setCartProducts}
        updateTotalProducts={updateTotalProducts}
        updateTotalPrice={updateTotalPrice}
      />
      <Summary 
        totalPrice={totalPrice}
        updateTotalPrice={updateTotalPrice}        
      />
    </div>
  )
}

export default App
